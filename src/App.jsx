import React from "react";
import ServiceForm from "./ServiceForm";
import { formatPrice } from "./utils";

const initialServices = [
  {
    id: 1,
    name: "General Checkup",
    description: "Annual physical examination",
    price: 100,
  },
  {
    id: 2,
    name: "Dental Cleaning",
    description: "Professional teeth cleaning",
    price: 75,
  },
  {
    id: 3,
    name: "Blood Test",
    description: "Comprehensive blood analysis",
    price: 50,
  },
  {
    id: 4,
    name: "X-Ray",
    description: "Radiographic imaging for diagnosis",
    price: 120,
  },
  {
    id: 5,
    name: "Vaccination",
    description: "Preventative immunization shots",
    price: 30,
  },
];

function App() {
  const [services, setServices] = React.useState(initialServices);
  const [editingService, setEditingService] = React.useState(null);

  const addService = (newService) => {
    setServices((prev) => [...prev, { ...newService, id: Date.now() }]);
  };

  const updateService = (updatedService) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setEditingService(null);
  };

  const deleteService = (id) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
              Healthcare Services
            </h1>

            <ServiceForm
              service={
                editingService || { name: "", description: "", price: "" }
              }
              onSubmit={editingService ? updateService : addService}
              onCancel={() => setEditingService(null)}
            />

            <ul className="mt-8 space-y-4">
              {services.map((service) => (
                <li
                  key={service.id}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {service.name}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {service.description}
                    </p>
                    <p className="mt-1 max-w-2xl text-sm font-bold text-gray-700">
                      {formatPrice(service.price)}
                    </p>
                    <div className="mt-4 flex space-x-3">
                      <button
                        onClick={() => setEditingService(service)}
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteService(service.id)}
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
              {services.length === 0 && (
                <p className="text-center text-gray-500">
                  No services available. Add a new service to get started.
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
