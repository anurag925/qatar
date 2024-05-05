interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
  statusCode?: number;
  error?: any 
}

export const callApi = async (method: string, api: string, body?: string, headers?: Record<string, string>): Promise<ApiResponse> =>{
  let res: ApiResponse = {success: false, message: 'something went wrong'}
  let token = localStorage.getItem("user_token");
  try {
    const response = await fetch(api, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, 
        ...headers
      },
      body: body
    });

    const responseData = await response.json();
    if (response.ok) {
      res.success = true;
      res.message = responseData?.message;
      res.data = responseData?.data;
      res.statusCode = response.status;
    } else {
      res.success = false;
      res.message = responseData?.message;
      res.statusCode = response.status;
    }
    return res
  } catch (error) {
    res.error = error
    return res
  }
}
