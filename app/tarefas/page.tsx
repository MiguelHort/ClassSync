import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default function Layout() {

    return (

    <div className="flex justify-center items-center w-full h-full">    
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Data Inicio</TableHead>
                    <TableHead>Data Termino</TableHead>
                    <TableHead>Materia</TableHead>
                    <TableHead>Professor</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>21/03/2025</TableCell>
                    <TableCell>25/03/2025</TableCell>
                    <TableCell>Requisitos</TableCell>
                    <TableCell>Edicarsia</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>12/01/2025</TableCell>
                    <TableCell>20/01/2025</TableCell>
                    <TableCell>Web</TableCell>
                    <TableCell>Claudinei</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>22/04/2025</TableCell>
                    <TableCell>05/05/2025</TableCell>
                    <TableCell>POO</TableCell>
                    <TableCell>Manseira</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>



    )
}
