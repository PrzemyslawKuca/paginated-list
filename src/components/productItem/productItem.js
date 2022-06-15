import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const productItem = ({product}) => {
    return (
        <TableRow style={{background: product.color}}>
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.year}</TableCell>
        </TableRow>
    )
}

export default productItem;