import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { FaUsers, FaUserTie, FaFileAlt, FaCheckCircle } from 'react-icons/fa';
import './AdminInfo.css';

const usersCount = 84;
const recruitersCount = 36;
const activeUsers = usersCount + recruitersCount;

const data = [
  { name: 'Users', value: usersCount },
  { name: 'Recruiters', value: recruitersCount },
];
const COLORS = ['#3498DB', '#E74C3C'];

function AdminInfo() {
  return (
    <div className="admin-info-container">
      <div className="admin-card admin-users">
        <FaUsers size={24} />
        <h3 className="admin-card-title">USERS</h3>
        <p className="admin-card-value">84,198</p>
      </div>
      <div className="admin-card admin-recruiters">
        <FaUserTie size={24} />
        <h3 className="admin-card-title">RECRUITERS</h3>
        <p className="admin-card-value">36,540</p>
      </div>
      <div className="admin-card admin-reports">
        <FaFileAlt size={24} />
        <h3 className="admin-card-title">PENDING REPORTS</h3>
        <p className="admin-card-value">24,225</p>
      </div>
      <div className="admin-card admin-verifications">
        <FaCheckCircle size={24} />
        <h3 className="admin-card-title">PENDING VERIFICATIONS</h3>
        <p className="admin-card-value">88,658</p>
      </div>
      
      <div className="admin-chart-container">
        <h3 className="admin-chart-title">Active Users</h3>
        <div className="admin-chart-wrapper">
          <PieChart width={500} height={300}>
            <Pie data={data} dataKey="value" outerRadius={100} fill="#8884d8">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
          <div className="admin-chart-overlay">
            <p>Active Users</p>
            <p>{activeUsers}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminInfo;
