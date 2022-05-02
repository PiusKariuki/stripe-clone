import React from "react";

const Text: React.FC<{ text: string }> = ({ text }) => {
	return <div className="ttext-[15px] text-black-20">{text}</div>;
};

export default Text;
