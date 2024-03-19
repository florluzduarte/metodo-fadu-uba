import { docentesInfo } from "@/content/docentes/docentesInfo"
import { DocenteCard } from "@/components";

export const DocenteCardGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 xl:gap-24">
      {
        docentesInfo.map((docente) => (
          <DocenteCard key={docente.name} {...docente} />
        ))
      }
    </div>
  )
}
