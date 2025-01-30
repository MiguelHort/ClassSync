import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default function Layout() {

    const rows = [
        {
            titulo: "Fazer Vídeo",
            dataini: "2025-03-21",
            datafim: "2025-03-25",
            materia: "Requisitos",
            professor: "Edicarsia",
        },
        {
            titulo: "Contruir Site",
            dataini: "2025-04-12",
            datafim: "2025-04-25",
            materia: "Web",
            professor: "Claudinei",
        },
        {
            titulo: "Sistema Funcional",
            dataini: "2025-02-21",
            datafim: "2025-03-23",
            materia: "POO",
            professor: "Manseira",
        },
    ];

    return (
        <div className="flex justify-center items-center w-full h-full">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Titulo</TableHead>
                        <TableHead>Data Inicio</TableHead>
                        <TableHead>Data Termino</TableHead>
                        <TableHead>Materia</TableHead>
                        <TableHead>Professor</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((item) => (
                        <TableRow key={item.titulo}>
                            <TableCell>{item.titulo}</TableCell>
                            <TableCell>{item.dataini}</TableCell>
                            <TableCell>{item.datafim}</TableCell>
                            <TableCell>{item.materia}</TableCell>
                            <TableCell>{item.professor}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>



    )
}
