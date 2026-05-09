// src/Dashboard.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Sidebar Component
const Sidebar = () => {
  const menuItems = [
    { icon: "📊", label: "Dashboard" },
    { icon: "📅", label: "Appointment" },
    { icon: "👨‍⚕️", label: "Doctor" },
    { icon: "🏥", label: "Patient" },
    { icon: "📈", label: "Report" },
    { icon: "⚙️", label: "Setting" },
    { icon: "🚪", label: "Logout" },
  ];

  return (
    <div className="w-64 bg-blue-600 text-white h-screen p-6">
      <h1 className="text-2xl font-bold mb-10">Happycare</h1>
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="mb-4 flex items-center cursor-pointer hover:bg-blue-700 p-2 rounded"
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search type of keywords"
        className="border rounded-full px-4 py-2 w-64"
      />
      <div className="flex items-center">
        <button className="mr-4">🔔</button>
        <div>
          <p className="font-bold">Dr. Dilip Anmangandla, MD</p>
          <p className="text-sm text-gray-500">
            Appointment: 4250 | Total Patients: 32.1k | Rate: 4.8
          </p>
        </div>
      </div>
    </header>
  );
};

// MetricsCards Component
const MetricCard = ({ icon, title, value, change }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-between items-center mb-4">
      <span className="text-2xl">{icon}</span>
      <span className="text-green-500">▲ +{change}</span>
    </div>
    <h3 className="text-gray-500 mb-2">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const MetricsCards = () => {
  const metrics = [
    { icon: "💼", title: "Earnings", value: "$23,425", change: "201" },
    { icon: "👥", title: "New Patient", value: "1,925", change: "201" },
    { icon: "📅", title: "New Appointment", value: "153", change: "201" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

// PatientVisitChart Component
const PatientVisitChart = () => {
  const data = [
    { month: "Jan", visits: 65 },
    { month: "Feb", visits: 145 },
    { month: "Mar", visits: 90 },
    { month: "Apr", visits: 70 },
    { month: "May", visits: 85 },
    { month: "Jun", visits: 75 },
    { month: "Jul", visits: 110 },
    { month: "Aug", visits: 180 },
    { month: "Sep", visits: 130 },
    { month: "Oct", visits: 155 },
    { month: "Nov", visits: 190 },
    { month: "Dec", visits: 110 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Patient Visit</h3>
        <select className="border rounded px-2 py-1">
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Line type="monotone" dataKey="visits" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// UpcomingAppointments Component
const UpcomingAppointments = () => {
  const appointments = [
    {
      time: "08:30 am - 10:30 am",
      title: "Nurse Visit 20",
      doctor: "Dr. Carol D. Pollack-rundle",
    },
    {
      time: "08:30 am - 10:30 am",
      title: "Annual Visit 15",
      doctor: "Dr. Donald F. Watren",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Upcoming Appointment</h3>
      <p className="text-blue-500 font-bold mb-4">July 30, 2022</p>
      {appointments.map((appointment, index) => (
        <div key={index} className="mb-4">
          <p className="text-gray-500">{appointment.time}</p>
          <p className="font-bold">{appointment.title}</p>
          <p>{appointment.doctor}</p>
        </div>
      ))}
    </div>
  );
};

// PatientDataTable Component
const PatientDataTable = () => {
  const patients = [
    {
      name: "Jenny Wilson",
      date: "Dec 18, 2021",
      symptoms: "Geriatrician",
      status: "Confirmed",
    },
    {
      name: "Albert Flores",
      date: "Dec 18, 2021",
      symptoms: "Internist",
      status: "Incoming",
    },
    {
      name: "Floyd Miles",
      date: "Dec 18, 2021",
      symptoms: "Urogynecologist",
      status: "Confirmed",
    },
    {
      name: "Marvin McKinney",
      date: "Dec 18, 2021",
      symptoms: "Cardiologist",
      status: "Cancelled",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Patient Data</h3>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="pb-2">Patient name</th>
            <th className="pb-2">Date in</th>
            <th className="pb-2">Symptoms</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{patient.name}</td>
              <td className="py-2">{patient.date}</td>
              <td className="py-2">{patient.symptoms}</td>
              <td className="py-2">
                <span
                  className={`px-2 py-1 rounded ${
                    patient.status === "Confirmed"
                      ? "bg-green-100 text-green-800"
                      : patient.status === "Incoming"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {patient.status}
                </span>
              </td>
              <td className="py-2">
                <button className="mr-2">✏️</button>
                <button>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// PatientSatisfactionChart Component
const PatientSatisfactionChart = () => {
  const data = [
    { name: "Excellent", value: 60 },
    { name: "Good", value: 30 },
    { name: "Poor", value: 10 },
  ];

  const COLORS = ["#3b82f6", "#f59e0b", "#ef4444"];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Patient Satisfaction</h3>
      <div className="flex items-center">
        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="ml-6">
          <p className="text-3xl font-bold">45,251</p>
          <p className="text-gray-500">Total</p>
          <ul className="mt-4">
            {data.map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <span
                  className={`w-3 h-3 rounded-full mr-2`}
                  style={{ backgroundColor: COLORS[index] }}
                ></span>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Main DashboardLayout Component
const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <MetricsCards />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <PatientVisitChart />
            <UpcomingAppointments />
          </div>
          <div className="mt-6">
            <PatientDataTable />
          </div>
          <div className="mt-6">
            <PatientSatisfactionChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
