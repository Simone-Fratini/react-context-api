import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MainContext  from '../contexts/MainContext';

function CardPage() {
  const { id } = useParams(); 
  const { posts } = useContext(MainContext)
  const trueId = id - 1

  return (
    <div className="min-h-screen bg-[#150050] text-white flex items-center justify-center p-6">
      <div className="bg-[#000000] p-8 rounded-lg shadow-lg max-w-lg">
        <img
          src={posts[trueId].img}
          alt={posts[trueId].name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{posts[trueId].name}</h1>
        <p className="mb-4">{posts[trueId].content}</p>
        <div className="text-lg font-semibold mb-4">Price: €{posts[trueId].price}</div>
      </div>
    </div>
  );
}

export default CardPage;
