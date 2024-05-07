
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
  product_id: number | null
  quantity: number | null
  amount: number | null
  aod_id: number | null
  aod_index: number | null
  monthly_target: number | null
  total_quantity: number | null
  total_amount: number | null
}

const StockTransferNew = () => {
  const [productDetails, setProductDetails] = useState<Array<ProductDetail>>([]);
  const [areaDevelopmentOfficers, setAreaDevelopmentOfficers] = useState<Array<AreaDevelopmentOfficerDetails>>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail>();
  const [selectedAod, setSelectedAod] = useState<AreaDevelopmentOfficerDetails>();
  const [formData, setFormData] = useState<StockTransferFormData>({
    amount: null,
    aod_id: null,
    aod_index: null,
    monthly_target: null,
    product_id: null,
    quantity: null,
    total_amount: null,
    total_quantity: null
  });

  const handleChangeProduct = (product: ProductDetail) => {
    setSelectedProduct(product);
    formData.product_id = product.product_id
    setFormData(formData)
  };

  const handleChangeAod = (aod: AreaDevelopmentOfficerDetails) => {
    setSelectedAod(aod);
    formData.aod_id = aod.id
    setFormData(formData)
  };

  const handleFromDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
          <AppTextField name="quantity" label="Quantity" value={formData?.quantity} onChange={handleFromDataChange} style={{ width: '48%', }} />
          <AppTextField name="amount" label="Amount" value={formData?.amount} onChange={handleFromDataChange} style={{ width: '48%', }} />
        </Box>
        <AppTextField select label="Select ADO" value={selectedAod?.name}>
          {areaDevelopmentOfficers.map((aod) => (
            <MenuItem key={aod.id} value={aod.name} onClick={()=> handleChangeAod(aod)}>{aod.name}</MenuItem>
          ))}
        </AppTextField>
        <AppTextField name="monthly_target" label="Set Monthly Target" value={formData?.monthly_target} onChange={handleFromDataChange}/>
        <Box display={'flex'} justifyContent={'space-between'}>
          <AppTextField name="total_quantity" contentEditable={false} label="Total Qty" value={formData?.total_quantity} style={{ width: '48%', }} />
          <AppTextField name="total_amount" label="Total Amt" value={formData?.total_amount} style={{ width: '48%', }} />
        </Box>
      </FormBackground>
      <AppButton style={{ margin: 'auto', marginTop: '10px', width: '80%' }}>Transfer</AppButton>
    </Box>
  )
}

export default StockTransferNew