import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';

function App() {
    const goodsList = [
        { id: 1, name: "Apple", price: 15, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300" },
        { id: 2, name: "Pear", price: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzDZKPoq3N7g1BjbbFGb-3MRdvYpmq3W8sevSO_nkvLA&s=10" },
        { id: 3, name: "Grape", price: 25, image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=300" },
        { id: 4, name: "Peach", price: 18, image: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=300" },
        { id: 5, name: "Banana", price: 30, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300" },
        { id: 6, name: "Orange", price: 22, image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=300" }
    ];

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", background: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.05)" }}>
            <Header />
            <Content />
            <Image />
            
            <h2 style={{ marginTop: "40px", borderBottom: "2px solid #068f8f", paddingBottom: "10px" }}>Галерея товарів</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px", justifyContent: "center" }}>
                {goodsList.map(item => (
                    <GoodsCard 
                        key={item.id} 
                        name={item.name} 
                        price={item.price} 
                        image={item.image} 
                    />
                ))}
            </div>
        </div>
    );
}

export default App;