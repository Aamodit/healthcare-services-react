export const ServiceType = {
    id: 'number',
    name: 'string',
    description: 'string',
    price: 'number'
  };
  
  export const validateService = (service) => {
    if (!service.name.trim()) {
      return 'Service name is required';
    }
    if (!service.description.trim()) {
      return 'Description is required';
    }
    if (!service.price || isNaN(parseFloat(service.price)) || parseFloat(service.price) <= 0) {
      return 'Price must be a positive number';
    }
    return '';
  };
  
  export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };