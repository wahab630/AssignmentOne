import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <>
      <div className="modal-overlay">
        <div className="inner-modal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint soluta
          molestiae odit ipsa ipsam dicta quod ducimus explicabo odio laboriosam
          voluptatum deleniti recusandae sapiente officiis, numquam obcaecati
          iste natus atque! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. In asperiores corporis officiis perspiciatis odio autem natus,
          repellat, a maiores magnam modi nostrum facere neque similique officia
          reprehenderit provident qui molestiae! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iste quidem, suscipit voluptas, libero
          quaerat, natus unde aperiam ab blanditiis exercitationem eaque tempore
          nobis voluptate fuga ipsam? Suscipit praesentium quasi ducimus nihil
          delectus, est eveniet optio voluptatibus debitis, omnis ullam maiores
          perferendis, illum quaerat ut consectetur.
          <button className="btn btn-danger p-2 closer" onClick={closeModal}>
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
