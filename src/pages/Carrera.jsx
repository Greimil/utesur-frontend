import { Section } from "../components/ui/wrappers/Section"
import { HeroSectionCarreras } from "../components/Carreras/Components/Herosection/HeroSectionCarreras"
import { Detalles } from "../components/Carreras/Components/Detalles/Detalles"
import { useParams } from "react-router-dom"

export const Carrera = () => {
  
  let parametros = useParams()
  
  return (
    <Section>
        <HeroSectionCarreras carrera={parametros.carreraId} />
        <Detalles/>
    </Section>
  )
}

