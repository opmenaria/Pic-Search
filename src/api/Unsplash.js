import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kFI_Nq-Wr1LMxojg19MdqWx9vC1n9vzgnn5dNMbKvQs'
    }
})