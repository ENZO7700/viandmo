
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Clock, DollarSign, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const serviceCategories = {
  "Strihanie": ["Men's Cut", "Women's Cut"],
  "Farbenie": ["Single Process Color", "Balayage"],
  "Styling a Ošetrenie": ["Blowout & Style", "Keratin Treatment"],
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://picsum.photos/1920/1080?random=22"
          alt="Naše služby"
          fill
          priority
          className="object-cover object-center brightness-50"
          data-ai-hint="salon tools"
        />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-headline leading-tight text-primary drop-shadow-lg">
            Naše Služby
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Ponorte sa do sveta exkluzívnej starostlivosti, kde každá služba je umením.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container space-y-16">
          {Object.entries(serviceCategories).map(([category, serviceNames]) => (
            <div key={category} id={category.toLowerCase().replace(' ', '-')}>
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-headline text-primary">{category}</h2>
                  <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Profesionálne služby prispôsobené vašim potrebám.
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter(service => serviceNames.includes(service.name))
                  .map(service => (
                    <Card key={service.id} className="flex flex-col">
                      <CardHeader>
                        <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow space-y-3">
                         <div className="flex items-center text-muted-foreground">
                           <Clock className="w-5 h-5 mr-2 text-primary"/>
                           <span>Trvanie: {service.duration} minút</span>
                         </div>
                         <div className="flex items-center text-muted-foreground">
                           <DollarSign className="w-5 h-5 mr-2 text-primary"/>
                           <span>Cena: ${service.price.toFixed(2)}</span>
                         </div>
                         <div className="flex items-start text-muted-foreground">
                            <CheckCircle className="w-5 h-5 mr-2 mt-1 text-primary flex-shrink-0"/>
                            <span>Vrátane konzultácie, umytia vlasov a finálneho stylingu.</span>
                         </div>
                      </CardContent>
                       <CardFooter>
                        <Button asChild className="w-full">
                          <Link href="/booking">Rezervovať túto službu</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
       {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-headline mb-4">
            Pripravení na premenu?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
            Doprajte si zážitok, ktorý si zaslúžite. Váš nový vzhľad čaká.
          </p>
          <Link href="/booking" passHref>
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg transition-colors duration-300">
              Objednajte sa teraz
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
