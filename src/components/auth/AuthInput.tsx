interface AuthInputProps {
  label: string;
  value: any;
  type?: "text" | "email" | "password";
  mandatory?: boolean;
  new: (newValue: any) => void;
}

const AuthInput = (props: AuthInputProps) => {
  return (
    <div className=" flex flex-col mt-4">
      <label>{props.label}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={(e) => props.new?.(e.target.value)}
        required={props.mandatory}
        className="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-indigo-500 focus:outline-none focus:bg-white"
      />
    </div>
  );
};

export default AuthInput;
