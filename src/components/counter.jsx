import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


// eslint-disable-next-line react/prop-types
const Counter = ({ end, label }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (
        <div ref={ref}>
            <p className="text-[40px] font-thin text-[#373943]">
                {inView ? <CountUp start={0} end={end} duration={2.5} /> : '0'}+
            </p>
            <p className="text-[24px] font-thin text-[#373943]">{label}</p>
        </div>
    );
};

const CounterSection = () => {
    return (
        <div className="flex items-center justify-between my-10">
            <Counter end={22} label="yaşında" />
            <Counter end={3} label="yıllık deneyim" />
            <Counter end={10} label="kurumsal websitesi" />
            <Counter end={5} label="projede yer aldı" />
        </div>
    );
};

export default CounterSection;
