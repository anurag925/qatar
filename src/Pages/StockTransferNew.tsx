
import { Button, CssBaseline, MenuItem } from "@mui/material";
import Box from '@mui/material/Box';
import { useState } from "react";
import AppTextField from "../components/common/AppTextField";
import FormBackground from "../components/common/FormBackground";
import PrimaryAppBar from "../components/common/PrimaryAppBar";
import AppButton from "../components/common/AppButton";


const StockTransferNew = () => {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const handleChangeItem = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedItem(event.target.value as string);
  };

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  return (
    <Box>
      <CssBaseline />
      <PrimaryAppBar title="Stock Transfer" />
      <FormBackground>
        <AppTextField select label="Item name" value={selectedItem} onChange={handleChangeItem}>
          <MenuItem value="">None</MenuItem>
          <MenuItem value="Item 1">Item 1</MenuItem>
          <MenuItem value="Item 2">Item 2</MenuItem>
          <MenuItem value="Item 3">Item 3</MenuItem>
        </AppTextField>
        <AppTextField label="₹ 1200 (1L)" value={amount} onChange={handleChangeAmount} />
        <Box display={'flex'} justifyContent={'space-between'}>
          <AppTextField label="Quantity" value={amount} onChange={handleChangeAmount} style={{ width: '48%', }} />
          <AppTextField label="Amount" value={amount} onChange={handleChangeAmount} style={{ width: '48%', }} />
        </Box>
        <AppTextField select label="Select ADO" value={selectedItem} onChange={handleChangeItem}>
          <MenuItem value="">None</MenuItem>
          <MenuItem value="Item 1">Item 1</MenuItem>
          <MenuItem value="Item 2">Item 2</MenuItem>
          <MenuItem value="Item 3">Item 3</MenuItem>
        </AppTextField>
        <Box display={'flex'} justifyContent={'space-between'}>
          <AppTextField label="Total Qty" value={amount} onChange={handleChangeAmount} style={{ width: '48%', }} />
          <AppTextField label="Total Amt" value={amount} onChange={handleChangeAmount} style={{ width: '48%', }} />
        </Box>
      </FormBackground>
      <AppButton style={{marginTop: '10px', margin: 'auto', width: '80%'}}>Transfer</AppButton>
    </Box>
  )
}

export default StockTransferNew