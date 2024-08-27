// myComponent.js

import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import { Child } from "./child";
import "./bubble.css";
import Container from "@/components/ui/container";

export default function MyComponent() {
	const options = {
		size: 183,
		minSize: 27,
		gutter: 14,
		provideProps: true,
		numCols: 3,
		fringeWidth: 117,
		yRadius: 130,
		xRadius: 211,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 2
	}

	const staticData = [
		{ name: "Item 1", image: "/css-logo.png", color: "#007BFF" },
		{ name: "Item 2", image: "/html-logo.png", color: "#0056D2" },
		{ name: "Item 3", image: "/js-logo.webp", color: "#66B2FF" },
		{ name: "Item 4", image: "/react-logo.png", color: "#3399FF" },
		{ name: "Item 5", image: "/nodejs-logo.webp", color: "#004080" },
		{ name: "Item 1", image: "/pug-logo.png", color: "#007BFF" },
		{ name: "Item 2", image: "/tailwind-logo.png", color: "#0056D2" },
		{ name: "Item 3", image: "/sass-logo.png", color: "#66B2FF" },

	];



	const children = staticData.map((data, i) => {
		return <Child data={data} className="child" key={i} />;
	});

	return (
		<Container>
			<section className="flex items-center  justify-center gap-5">
				<div className="max-w-[50%]">
					<span className="content-header" >Yeteneklerim</span>
					<p className="text">Frontend developer olarak, modern web projelerinde etkili ve kullanıcı dostu arayüzler geliştirmek için HTML, CSS, JavaScript, React, Node.js gibi temel teknolojilerin yanı sıra, Pug, Sass, SCSS ve Tailwind CSS gibi araçlarla çalışıyorum. Bu teknolojilerle projeleri hızlandırıyor, kodun okunabilirliğini ve bakımını kolaylaştırıyorum.</p>
				</div>
				<BubbleUI options={options} className="myBubbleUI ">
					{children}
				</BubbleUI>
			</section>
		</Container>

	);
}
