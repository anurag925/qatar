
import { CssBaseline, MenuItem } from "@mui/material";
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import AppTextField from "../components/common/AppTextField";
import FormBackground from "../components/common/FormBackground";
import PrimaryAppBar from "../components/common/PrimaryAppBar";
import AppButton from "../components/common/AppButton";
import { callApi } from "../services/api_caller";
import { stockTransferDetails } from "../helpers/apis";

interface ProductDetail {
  name: string;
  category: string;
  quantity: number;
  price: number;
  inventory_id: number;
  product_id: number;
}

interface AreaDevelopmentOfficerDetails {
  id: number
  name: string
}

interface StockTransferFormData {
  product_id: number
  quantity: number
  amount: number
  aod_id: number
  aod_index: number
  monthly_target: number
  total_quantity: number
  total_amount: number
}

const StockTransferNew = () => {
  const [productDetails, setProductDetails] = useState<Array<ProductDetail>>([]);
  const [areaDevelopmentOfficers, setAreaDevelopmentOfficers] = useState<Array<AreaDevelopmentOfficerDetails>>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail>();
  const [selectedAod, setSelectedAod] = useState<AreaDevelopmentOfficerDetails>();
  const [formData, setFormData] = useState<StockTransferFormData>();

  const handleChangeProduct = (product: ProductDetail) => {
    setSelectedProduct(product);
  };

  const handleChangeAod = (aod: AreaDevelopmentOfficerDetails) => {
    setSelectedAod(aod);
  };

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setAmount(event.target.value);
  };

  useEffect(() => {
    callAndSetStockTransferDetails()
  }, [])

  const callAndSetStockTransferDetails = async () => {
    const stockTransferApiResponse = await callApi('GET', stockTransferDetails)
    setProductDetails(stockTransferApiResponse?.data['product_details'])
    setAreaDevelopmentOfficers(stockTransferApiResponse?.data['area_development_officers'])
  }

  return (
    <Box>
      <CssBaseline />
      <PrimaryAppBar title="Stock Transfer" />
      <FormBackground>
        <AppTextField select label="Item name" value={selectedProduct?.name}>
          {productDetails.map((product) => (
            <MenuItem key={product.product_id} value={product.name} onClick={()=> handleChangeProduct(product)}>{product.name}</MenuItem>
          ))}
        </AppTextField>
        <AppTextField label="Price" value={selectedProduct?.price} focused contentEditable/>
        <Box display={'flex'} justifyContent={'space-between'}>
          <AppTextField label="Quantity" value={formData?.quantity} onChange={handleChangeAmount} style={{ width: '48%', }} />
          <AppTextField label="Amount" value={formData?.amount} onChange={handleChangeAmount} style={{ width: '48%', }} />
        </Box>
        <AppTextField select label="Select ADO" value={selectedAod?.name}>
          {areaDevelopmentOfficers.map((aod) => (
            <MenuItem key={aod.id} value={aod.name} onClick={()=> handleChangeAod(aod)}>{aod.name}</MenuItem>
          ))}
        </AppTextField>
        <AppTextField label="Set Monthly Target" value={formData?.monthly_target}/>
        <Box display={'flex'} justifyContent={'space-between'}>
          <AppTextField contentEditable={false} label="Total Qty" value={formData?.total_quantity} style={{ width: '48%', }} />
          <AppTextField label="Total Amt" value={formData?.total_amount} style={{ width: '48%', }} />
        </Box>
      </FormBackground>
      <AppButton style={{ margin: 'auto', marginTop: '10px', width: '80%' }}>Transfer</AppButton>
    </Box>
  )
}

export default StockTransferNew