import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

// Função para criar dados de pedidos
function createOrder(
  orderId,
  paymentId,
  userId,
  name,
  totalAmount,
  phone,
  address,
  email,
  status,
  date
) {
  return {
    orderId,
    paymentId,
    userId,
    name,
    totalAmount,
    phone,
    address,
    email,
    status,
    date,
    products: [
      {
        productId: "P001",
        productTitle: "Smartphone XYZ",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl0zUYiUExb40GaRUddIVUrx3zg3-EZ6yQA&s",
        quantity: 1,
        price: 800.0,
      },
      {
        productId: "P002",
        productTitle: "Capa Protetora",
        image: "/images/case.jpg",
        quantity: 2,
        price: 50.0,
      },
    ],
  };
}

// Componente da linha da tabela
function OrderRow({ order }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      {/* Linha principal do pedido */}
      <tr
        className="border-b hover:bg-gray-50 cursor-pointer transition-colors"
        onClick={toggleOpen}
      >
        <td className="px-3 py-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleOpen();
            }}
            className="p-1 rounded hover:bg-gray-200 transition-colors"
          >
            {isOpen ? <FaAngleDown /> : <FaAngleUp />}
          </button>
        </td>
        <td className="px-3 py-4 font-medium text-gray-900">{order.orderId}</td>
        <td className="px-3 py-4">{order.paymentId}</td>
        <td className="px-3 py-4">{order.userId}</td>
        <td className="px-3 py-4">{order.name}</td>
        <td className="px-3 py-4 font-semibold">{order.totalAmount}</td>
        <td className="px-3 py-4">{order.phone}</td>
        <td className="px-3 py-4 max-w-xs truncate">{order.address}</td>
        <td className="px-3 py-4">{order.email}</td>
        <td className="px-3 py-4">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
              order.status
            )}`}
          >
            {order.status}
          </span>
        </td>
        <td className="px-3 py-4">{order.date}</td>
      </tr>

      {/* Linha expandida com produtos */}
      {isOpen && (
        <tr className="bg-gray-50">
          <td colSpan="11" className="px-3 py-6">
            <div className="bg-white rounded-lg border p-4">
              <h3 className="text-lg font-semibold mb-4">Produtos do Pedido</h3>

              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">
                      Product ID
                    </th>
                    <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">
                      Product Title
                    </th>
                    <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">
                      Image
                    </th>
                    <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">
                      Quantity
                    </th>
                    <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">
                      Price
                    </th>
                    <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((product, index) => (
                    <tr key={product.productId} className="border-b">
                      <td className="px-3 py-3 text-sm">{product.productId}</td>
                      <td className="px-3 py-3 text-sm font-medium">
                        {product.productTitle}
                      </td>
                      <td className="px-3 py-3">
                        <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl0zUYiUExb40GaRUddIVUrx3zg3-EZ6yQA&s" />
                        </div>
                      </td>
                      <td className="px-3 py-3 text-sm">{product.quantity}</td>
                      <td className="px-3 py-3 text-sm">
                        R$ {product.price.toFixed(2)}
                      </td>
                      <td className="px-3 py-3 text-sm font-semibold">
                        R$ {(product.quantity * product.price).toFixed(2)}
                      </td>
                    </tr>
                  ))}

                  {/* Linha de total */}
                  <tr className="bg-gray-50 font-semibold">
                    <td colSpan="5" className="px-3 py-3 text-right text-sm">
                      Total do Pedido:
                    </td>
                    <td className="px-3 py-3 text-sm">{order.totalAmount}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

// Dados de exemplo
const ordersData = [
  createOrder(
    "1234",
    "7894",
    "159753",
    "Rajesh Sharma",
    "R$ 1.000,00",
    "(43) 98989-8989",
    "Rua 1, 111, Centro",
    "rajeshsharma@email.com",
    "Pending",
    "16/10/2025"
  ),
  createOrder(
    "1235",
    "7895",
    "159754",
    "Maria Silva",
    "R$ 2.500,00",
    "(11) 98765-4321",
    "Av. Paulista, 1000, São Paulo",
    "mariasilva@email.com",
    "Completed",
    "15/10/2025"
  ),
  createOrder(
    "1236",
    "7896",
    "159755",
    "João Santos",
    "R$ 750,00",
    "(21) 99876-5432",
    "Rua do Catete, 200, Rio de Janeiro",
    "joaosantos@email.com",
    "Pending",
    "14/10/2025"
  ),
];

// Componente principal da tabela
export default function OrdersTable() {
  return (
    <div className="w-full bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th scope="col" className="px-3 py-3"></th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Order ID
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Payment ID
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                User ID
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Total Amount
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Phone Number
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Address
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Order Status
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {ordersData.map((order) => (
              <OrderRow key={order.orderId} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
