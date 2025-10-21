import React from "react";
import { UploadBox } from "../../components/UploadBox";

export const ProductUpload = () => {
  return (
    <div className="bg-white p-5 rounded-md">
      <h1 className="text-2xl font-bold !mb-4">Add Product</h1>
      <form className="w-full flex flex-col gap-4">
        <div>
          <div className="form-group">
            <h4>Product Name</h4>
            <input
              type="text"
              className="border border-[rgba(0,0,0,0.2)] w-full"
            />
          </div>
          <div className="form-group">
            <h4>Product Description</h4>
            <textarea
              type="text"
              className="border border-[rgba(0,0,0,0.2)] w-full"
            />
          </div>
          <div className="form-group grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            <div className="subgroup w-[100%] max-w-[300px]">
              <h4>Product Category</h4>
              <select
                type="text"
                className="border border-[rgba(0,0,0,0.2)] w-full"
              />
            </div>
            <div className="subgroup w-[100%] max-w-[300px]">
              <h4>Product Sub Category</h4>
              <select
                type="text"
                className="border border-[rgba(0,0,0,0.2)] w-full"
              />
            </div>
            <div className="subgroup w-[100%] max-w-[300px]">
              <h4>Product Price</h4>
              <input
                type="text"
                className="border border-[rgba(0,0,0,0.2)] w-full"
              />
            </div>
            <div className="subgroup w-[100%] max-w-[300px]">
              <h4>Product Old Price</h4>
              <input
                type="text"
                className="border border-[rgba(0,0,0,0.2)] w-full"
              />
            </div>
            <div className="subgroup w-[100%] max-w-[300px]">
              <h4>Is Featured?</h4>
              <select
                type="text"
                className="border border-[rgba(0,0,0,0.2)] w-full"
              />
            </div>
            <div className="subgroup w-[100%] max-w-[300px]">
              <h4>Product Stock</h4>
              <input
                type="text"
                className="border border-[rgba(0,0,0,0.2)] w-full"
              />
            </div>
            <div className="subgroup w-[100%] max-w-[300px]">
              <h4>Product Brand</h4>
              <input
                type="text"
                className="border border-[rgba(0,0,0,0.2)] w-full"
              />
            </div>
            <div className="subgroup w-[100%] max-w-[300px]">
              <h4>Product Discount</h4>
              <input
                type="text"
                className="border border-[rgba(0,0,0,0.2)] w-full"
              />
            </div>
            <div className="subgroup w-[100%] max-w-[300px]">
              <h4>Product RAMS</h4>
              <select
                type="text"
                className="border border-[rgba(0,0,0,0.2)] w-full"
              />
            </div>
            <div className="subgroup w-[100%] max-w-[300px]">
              <h4>Product Weight</h4>
              <select
                type="text"
                className="border border-[rgba(0,0,0,0.2)] w-full"
              />
            </div>
            <div className="subgroup w-[100%] max-w-[300px]">
              <h4>Product Size</h4>
              <input
                type="text"
                className="border border-[rgba(0,0,0,0.2)] w-full"
              />
            </div>
          </div>
          <div className="col w-full p-5 px-0">
            <h3 className="font-bold">Media and Images</h3>

            <div className="grid grid-cols-6">
              <UploadBox multiple={true} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
