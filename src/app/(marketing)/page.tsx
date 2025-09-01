import { HeroSection } from '@/components/marketing/HeroSection';
import { AboutSection } from '@/components/marketing/AboutSection';
import { ServicesOverview } from '@/components/marketing/ServicesOverview';
import { CallToAction } from '@/components/marketing/CallToAction';
import { Testimonials } from '@/components/marketing/Testimonials';

// Funkcia na simuláciu získania dát (v produkcii by to bolo z CMS/databázy)
async function getHomePageData() {
  // Simulované dáta pre SSG
  return {
    hero: {
      title: 'Majstrovstvo vo vlasovom dizajne',
      subtitle: 'Transformujte svoj vzhľad v Papi Hair Design PRO',
      image: 'https://picsum.photos/1600/900', // Optimalizovaný WebP
      alt: 'Luxusný kadernícky salón interiér',
    },
    about: {
      title: 'Náš príbeh',
      description: 'V Papi Hair Design PRO veríme, že vlasy sú korunou krásy. S vášňou a precíznosťou tvoríme účesy, ktoré podčiarkujú vašu jedinečnosť. Náš tím špičkových stylistov neustále sleduje najnovšie trendy a techniky, aby sme vám priniesli len to najlepšie.',
      image: 'https://picsum.photos/800/600',
      alt: 'Stylista strihajúci vlasy klientke',
    },
    services: [
      { id: 'haircuts', name: 'Strihy & Styling', description: 'Moderné a klasické strihy, profesionálny styling pre každú príležitosť.', icon: 'scissors' },
      { id: 'coloring', name: 'Exkluzívne Farbenie', description: 'Od balayage po kompletnú zmenu farby s prémiovými produktmi.', icon: 'droplet' },
      { id: 'treatments', name: 'Regeneračné Kúry', description: 'Hĺbková starostlivosť a ošetrenie pre zdravé a lesklé vlasy.', icon: 'heart' },
    ],
    testimonials: [
      { name: 'Anna K.', text: 'Absolútne milujem svoj nový strih! Papi je skutočný umelec.', avatar: 'https://picsum.photos/100/100?random=1' },
      { name: 'Peter R.', text: 'Najlepší pánsky strih v meste, vždy sa vrátim!', avatar: 'https://picsum.photos/100/100?random=2' },
    ]
  };
}

export default async function HomePage() {
  const data = await getHomePageData(); // Data pre SSG

  return (
    <>
      <HeroSection
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        image={data.hero.image}
        alt={data.hero.alt}
      />
      <AboutSection
        title={data.about.title}
        description={data.about.description}
        image={data.about.image}
        alt={data.about.alt}
      />
      <ServicesOverview services={data.services} />
      <Testimonials testimonials={data.testimonials} />
      <CallToAction />
    </>
  );
}
