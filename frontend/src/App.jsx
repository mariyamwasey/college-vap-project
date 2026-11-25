import { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: 'Coffee with friends', amount: 450, type: 'expense', category: 'Food', emoji: '☕' },
    { id: 2, title: 'Monthly Allowance', amount: 5000, type: 'income', category: 'Income', emoji: '💰' },
    { id: 3, title: 'New Shoes', amount: 1999, type: 'expense', category: 'Shopping', emoji: '👟' },
  ]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('Food');

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + Number(t.amount), 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + Number(t.amount), 0);
  const balance = totalIncome - totalExpense;

  const getEmoji = () => {
    if (category === 'Food') return '🍕';
    if (category === 'Shopping') return '🛍️';
    if (category === 'Travel') return '✈️';
    if (category === 'Fun') return '🎉';
    if (category === 'Beauty') return '💄';
    return '✨';
  };

  const addTransaction = () => {
    if (!title.trim() || !amount) return;
    const newItem = { id: Date.now(), title, amount: Number(amount), type, category, emoji: type === 'income' ? '💰' : getEmoji() };
    setTransactions([newItem, ...transactions]);
    setTitle('');
    setAmount('');
  };

  const deleteTransaction = (id) => setTransactions(transactions.filter(t => t.id !== id));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
        @keyframes liveBg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floaty {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pop {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .live-bg {
          background: linear-gradient(-45deg, #FFAFCC, #FFC8DD, #BDE0FE, #A2D2FF, #CDB4DB, #FFC8DD) !important;
          background-size: 400% 400% !important;
          animation: liveBg 12s ease infinite !important;
        }
        .glass {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 40px rgba(255, 175, 204, 0.35);
          border: 1px solid rgba(255,255,255,0.9);
        }
        .card-hover { transition: 0.2s; animation: pop 0.3s ease; }
        .card-hover:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,0,0,0.08); }
        .btn-main { transition: 0.2s; cursor: pointer; }
        .btn-main:hover { transform: scale(1.04); }
        .btn-main:active { transform: scale(0.98); }
        input:focus, select:focus { border-color: #FFAFCC !important; outline: none; box-shadow: 0 0 0 3px rgba(255,175,204,0.3); }
      `}</style>

      <div className="live-bg" style={{ minHeight: '100vh', padding: '20px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '620px' }}>

          <div style={{ textAlign: 'center', margin: '15px 0 20px' }}>
            <span style={{ background: 'white', padding: '7px 16px', borderRadius: '25px', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#FF5D8F', boxShadow: '0 5px 15px rgba(0,0,0,0.08)' }}>✨ MY MONEY DIARY ✨</span>
            <h1 style={{ fontSize: '36px', margin: '14px 0 2px', color: '#2B2D42', fontWeight: 800 }}>Expense Tracker</h1>
            <p style={{ color: '#5A5A6E', fontSize: '14px', margin: 0 }}>Track every rupee, in style.</p>
          </div>

          <div className="glass" style={{ padding: '28px', borderRadius: '30px', textAlign: 'center', marginBottom: '18px', animation: 'floaty 5s ease-in-out infinite' }}>
            <p style={{ margin: 0, color: '#8D99AE', fontSize: '12px', fontWeight: 700, letterSpacing: '2px' }}>TOTAL BALANCE</p>
            <h1 style={{ fontSize: '52px', margin: '6px 0', color: '#2B2D42', fontWeight: 800, lineHeight: 1 }}>₹{balance.toLocaleString('en-IN')}</h1>
            <p style={{ margin: '8px 0 0', fontSize: '13px', color: balance >= 0 ? '#2EC4B6' : '#FF5D8F', fontWeight: 600 }}>{balance >= 0 ? 'You are doing great! Keep saving 💪' : 'Oops! Spending a little high this month'}</p>

            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <div style={{ flex: 1, background: 'linear-gradient(135deg, #D8F3DC, #B7E4C7)', padding: '16px', borderRadius: '20px' }}>
                <p style={{ margin: 0, fontSize: '11px', fontWeight: 800, color: '#1B4332', letterSpacing: '1px' }}>INCOME ↑</p>
                <p style={{ margin: '5px 0 0', fontSize: '22px', fontWeight: 800, color: '#1B4332' }}>₹{totalIncome.toLocaleString('en-IN')}</p>
              </div>
              <div style={{ flex: 1, background: 'linear-gradient(135deg, #FFCAD4, #FFAFCC)', padding: '16px', borderRadius: '20px' }}>
                <p style={{ margin: 0, fontSize: '11px', fontWeight: 800, color: '#7F1D1D', letterSpacing: '1px' }}>SPENT ↓</p>
                <p style={{ margin: '5px 0 0', fontSize: '22px', fontWeight: 800, color: '#7F1D1D' }}>₹{totalExpense.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>

          <div className="glass" style={{ padding: '24px', borderRadius: '30px', marginBottom: '18px' }}>
            <h3 style={{ margin: '0 0 16px', color: '#2B2D42', fontSize: '18px' }}>
              {type === 'income' ? 'Add New Income 💰' : 'Add New Expense 💸'}
            </h3>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={type === 'income' ? 'Where did you earn from? e.g. Allowance' : 'What did you spend on? e.g. Pizza'}
              style={{ width: '100%', padding: '14px 16px', borderRadius: '16px', border: '2px solid #EDE9FE', background: '#FFFBFE', fontSize: '15px', marginBottom: '12px' }}
            />

            <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                placeholder={type === 'income' ? 'How much did you earn? ₹' : 'How much did you spend? ₹'}
                style={{ flex: 1, padding: '14px 16px', borderRadius: '16px', border: '2px solid #EDE9FE', background: '#FFFBFE', fontSize: '15px' }}
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ flex: 1, padding: '14px', borderRadius: '16px', border: '2px solid #EDE9FE', background: '#FFFBFE', fontSize: '15px' }}
              >
                {type === 'income' ? (
                  <>
                    <option>Allowance</option><option>Salary</option><option>Gift</option><option>Other Income</option>
                  </>
                ) : (
                  <>
                    <option>Food</option><option>Shopping</option><option>Travel</option><option>Fun</option><option>Beauty</option><option>Other</option>
                  </>
                )}
              </select>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
              <button onClick={() => setType('expense')} className="btn-main" style={{ flex: 1, padding: '13px', borderRadius: '16px', border: 'none', fontWeight: 700, background: type === 'expense' ? '#FF5D8F' : '#F1F1F5', color: type === 'expense' ? 'white' : '#555' }}>Expense 💸</button>
              <button onClick={() => setType('income')} className="btn-main" style={{ flex: 1, padding: '13px', borderRadius: '16px', border: 'none', fontWeight: 700, background: type === 'income' ? '#2EC4B6' : '#F1F1F5', color: type === 'income' ? 'white' : '#555' }}>Income 💰</button>
            </div>
            <button onClick={addTransaction} className="btn-main" style={{ width: '100%', padding: '15px', borderRadius: '16px', border: 'none', fontWeight: 800, fontSize: '16px', background: 'linear-gradient(135deg, #FF5D8F, #A06CD5, #7EB6FF)', color: 'white', boxShadow: '0 10px 20px rgba(255,93,143,0.3)' }}>
              {type === 'income' ? 'Add Income +' : 'Add Expense +'}
            </button>
          </div>

          <div className="glass" style={{ padding: '24px', borderRadius: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, color: '#2B2D42', fontSize: '18px' }}>History</h3>
              <span style={{ background: '#F1F1F5', padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>{transactions.length} items</span>
            </div>

            {transactions.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '25px 0' }}>
                <div style={{ fontSize: '48px' }}>🦋</div>
                <p style={{ color: '#9CA3AF', marginTop: '10px' }}>No transactions yet. Add your first one!</p>
              </div>
            ) : transactions.map(t => (
              <div key={t.id} className="card-hover" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px', marginBottom: '10px', background: 'white', borderRadius: '18px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '16px', background: t.type === 'income' ? '#D8F3DC' : '#FFE5EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>{t.emoji}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontWeight: 700, color: '#2B2D42', fontSize: '15px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.title}</p>
                  <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#8D99AE' }}>{t.category} • {t.type === 'income' ? 'Income' : 'Expense'}</p>
                </div>
                <p style={{ fontWeight: 800, fontSize: '16px', color: t.type === 'income' ? '#2EC4B6' : '#FF5D8F', margin: 0 }}>{t.type === 'income' ? '+' : '-'}₹{Number(t.amount).toLocaleString('en-IN')}</p>
                <button onClick={() => deleteTransaction(t.id)} className="btn-main" style={{ background: '#FFF1F3', border: 'none', width: '32px', height: '32px', borderRadius: '50%', fontSize: '13px' }}>✕</button>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: '#6D6875', fontSize: '12px', marginTop: '16px', fontWeight: 500 }}>Made with love • Your money, your rules</p>
        </div>
      </div>
    </>
  );
}

export default App;