'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator } from 'lucide-react';

const bratislavaDistricts = [
  'Staré Mesto', 'Ružinov', 'Vrakuňa', 'Podunajské Biskupice', 'Nové Mesto', 
  'Rača', 'Vajnory', 'Karlova Ves', 'Dúbravka', 'Lamač', 'Devín', 
  'Devínska Nová Ves', 'Záhorská Bystrica', 'Petržalka', 'Jarovce', 'Rusovce', 'Čunovo'
];

const propertyTypes = {
  'Garsónka': { basePrice: 65, estimatedHours: 2 },
  '1-izbový byt': { basePrice: 70, estimatedHours: 2.5 },
  '2-izbový byt': { basePrice: 140, estimatedHours: 4 },
  '3-izbový byt': { basePrice: 240, estimatedHours: 6 },
  '4-izbový byt': { basePrice: 350, estimatedHours: 8 },
  'Rodinný dom': { basePrice: 450, estimatedHours: 10 },
};

const workerRates: { [key: number]: number } = {
  1: 40,
  2: 50,
  3: 65, // Estimated
  4: 80, // Estimated
  5: 95, // Estimated
};

const MIN_CHARGE = 70;
const FLOOR_CHARGE = 8;
const ASSEMBLY_HOURS = 1.5;
const TRANSPORT_FLAT_RATE = 30;
const KM_RATE = 0.8;

type PropertyType = keyof typeof propertyTypes;

export function InteractiveCalculator() {
  const [fromDistrict, setFromDistrict] = useState(bratislavaDistricts[0]);
  const [toDistrict, setToDistrict] = useState(bratislavaDistricts[0]);
  const [propertyType, setPropertyType] = useState<PropertyType>('2-izbový byt');
  const [fromFloor, setFromFloor] = useState([2]);
  const [toFloor, setToFloor] = useState([2]);
  const [fromElevator, setFromElevator] = useState(true);
  const [toElevator, setToElevator] = useState(true);
  const [workers, setWorkers] = useState([2]);
  const [assembly, setAssembly] = useState(false);
  const [distance, setDistance] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    const selectedProperty = propertyTypes[propertyType];

    // 1. Base price from property type
    let basePrice = selectedProperty.basePrice;

    // 2. Worker cost
    let hours = selectedProperty.estimatedHours;
    if (assembly) {
      hours += ASSEMBLY_HOURS;
    }
    const workerRate = workerRates[workers[0]] || 50;
    const workCost = hours * workerRate;

    // 3. Floor charge
    let floorCost = 0;
    if (!fromElevator) {
      floorCost += fromFloor[0] * FLOOR_CHARGE;
    }
    if (!toElevator) {
      floorCost += toFloor[0] * FLOOR_CHARGE;
    }
    
    // 4. Transport cost
    let transportCost = TRANSPORT_FLAT_RATE;
    if (fromDistrict === 'Mimo Bratislavy' || toDistrict === 'Mimo Bratislavy') {
      transportCost = distance * KM_RATE;
    }
    
    price = basePrice + workCost + floorCost + transportCost;

    // 5. Check against minimum charge
    if (price < MIN_CHARGE) {
      price = MIN_CHARGE;
    }

    setTotalPrice(Math.round(price));

  }, [fromDistrict, toDistrict, propertyType, fromFloor, toFloor, fromElevator, toElevator, workers, assembly, distance]);

  const isOutOfBratislava = fromDistrict === 'Mimo Bratislavy' || toDistrict === 'Mimo Bratislavy';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* Calculator Inputs */}
      <Card className="lg:col-span-2 shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Parametre sťahovania</CardTitle>
          <CardDescription>Zadajte detaily pre čo najpresnejší odhad.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="from-district">Odkiaľ?</Label>
                    <Select value={fromDistrict} onValueChange={setFromDistrict}>
                        <SelectTrigger id="from-district"><SelectValue/></SelectTrigger>
                        <SelectContent>
                            {[...bratislavaDistricts, 'Mimo Bratislavy'].map(d => <SelectItem key={`from-${d}`} value={d}>{d}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="to-district">Kam?</Label>
                    <Select value={toDistrict} onValueChange={setToDistrict}>
                        <SelectTrigger id="to-district"><SelectValue /></SelectTrigger>
                        <SelectContent>
                             {[...bratislavaDistricts, 'Mimo Bratislavy'].map(d => <SelectItem key={`to-${d}`} value={d}>{d}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
            </div>

             <AnimatePresence>
                {isOutOfBratislava && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 overflow-hidden"
                    >
                        <Label htmlFor="distance">Vzdialenosť mimo Bratislavy (km)</Label>
                        <Input id="distance" type="number" value={distance} onChange={(e) => setDistance(Number(e.target.value))} placeholder="Zadajte počet kilometrov"/>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="space-y-2">
                <Label htmlFor="property-type">Typ nehnuteľnosti</Label>
                <Select value={propertyType} onValueChange={(val) => setPropertyType(val as PropertyType)}>
                    <SelectTrigger id="property-type"><SelectValue/></SelectTrigger>
                    <SelectContent>
                        {Object.keys(propertyTypes).map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                    </SelectContent>
                </Select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <Label>Adresa nakládky</Label>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <Label htmlFor="from-floor" className="text-sm font-normal">Poschodie: {fromFloor[0]}</Label>
                        </div>
                        <Slider id="from-floor" value={fromFloor} onValueChange={setFromFloor} max={15} step={1} />
                    </div>
                     <div className="flex items-center space-x-2">
                        <Switch id="from-elevator" checked={fromElevator} onCheckedChange={setFromElevator} />
                        <Label htmlFor="from-elevator">K dispozícii je výťah</Label>
                    </div>
                </div>
                 <div className="space-y-4">
                    <Label>Adresa vykládky</Label>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <Label htmlFor="to-floor" className="text-sm font-normal">Poschodie: {toFloor[0]}</Label>
                        </div>
                        <Slider id="to-floor" value={toFloor} onValueChange={setToFloor} max={15} step={1} />
                    </div>
                     <div className="flex items-center space-x-2">
                        <Switch id="to-elevator" checked={toElevator} onCheckedChange={setToElevator} />
                        <Label htmlFor="to-elevator">K dispozícii je výťah</Label>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <Label htmlFor="workers">Počet pracovníkov</Label>
                    <span className="font-bold text-lg">{workers[0]}</span>
                </div>
                <Slider id="workers" value={workers} onValueChange={setWorkers} min={1} max={5} step={1} />
            </div>

            <div className="flex items-center space-x-2 pt-2">
                <Switch id="assembly" checked={assembly} onCheckedChange={setAssembly} />
                <Label htmlFor="assembly">Požadujem demontáž a montáž nábytku</Label>
            </div>

        </CardContent>
      </Card>

      {/* Price Summary */}
      <div className="lg:col-span-1 sticky top-24">
        <Card className="shadow-lg rounded-xl bg-muted/50">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                <Calculator className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl pt-2">Odhadovaná cena</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
             <p className="text-5xl font-bold tracking-tighter text-primary">{totalPrice} €</p>
             <p className="text-muted-foreground text-sm mt-2">vrátane DPH</p>
          </CardContent>
          <CardFooter className="flex-col gap-4 px-6 pb-6">
             <Button asChild size="lg" className="w-full">
                <Link href="/contact">Chcem presnú ponuku</Link>
             </Button>
             <p className="text-xs text-muted-foreground text-center px-4">Toto je len orientačná cena. Pre finálnu cenovú ponuku nás, prosím, kontaktujte.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
