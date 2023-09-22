import Section1 from '@/components/section1/page'
import styles from './page.module.css'
import Hero from '@/components/hero/page'
import Section2 from '@/components/section2/page'
import Section3 from '@/components/section3/page'
import Section4 from '@/components/section4/page'
import Section5 from '@/components/section5/page'
import Section6 from '@/components/section6/page'
import Section7 from '@/components/section7/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </main>
  )
}
