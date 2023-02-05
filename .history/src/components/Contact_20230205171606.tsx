import * as React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
};

const Contact = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  // firstName and lastName will have correct type

  return (
    <>
      {/* 1st div container */}
      <div className="h-full w-full relative">
        {/* Form div */}
        <div className="h-[40%] w-[50%] bg-white absolute border-2 top-40  right-10">
          <form onSubmit={onSubmit}>
            <label>First Name</label>
            <input
            className="color" {...register("firstName")} />
            <label>Last Name</label>
            <input {...register("lastName")} />
            <button
              type="button"
              onClick={() => {
                setValue("lastName", "luo"); // ✅
                // ❌: property bill does not exist
              }}
            >
              SetValue
            </button>
          </form>
        </div>
        {/* Grid div */}
        <div>
          {/* 4 divs  */}

          <div>
            Notre Bureau principal
            {/* 3 divs flex */}
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            Numéro de téléphone
            {/* 3 divs flex */}
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            {/* 3 divs flex */}
            Fax
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            {/* 3 divs flex */}
            Email
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;