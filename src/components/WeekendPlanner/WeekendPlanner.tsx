import FilterButtons from '../FilterButtons';
import OtherThingsTonight from '../OtherThingsTonight';
import TonightsPick from '../TonightsPick';

// Image assets from Figma
const imgF15E36610Edbf10101B9Adda6F5D07Ba1 =
  'http://localhost:3845/assets/5390659823fabdebd8931f08687d3530ebbb52ae.png';
const imgA46733B363D658Bf409588Ee7F41458D1 =
  'http://localhost:3845/assets/f57be7d3bb340b5adb6e1272658124bcd38be27d.png';
const imgVector =
  'http://localhost:3845/assets/5476204c7255fb6b2cf1744b23da45531f9ec294.svg';
const imgEllipse2 =
  'http://localhost:3845/assets/b99c9f0519591c0e054861198990e2e3a31105e7.svg';
const imgLine8 =
  'http://localhost:3845/assets/8101a426a381d8b3910a0339db39b766e49c0f5c.svg';
const imgVector1 =
  'http://localhost:3845/assets/ede80fe6f0c1d3f159bac3e7ccd3a276b58cbc7d.svg';
const imgEllipse3 =
  'http://localhost:3845/assets/17f46fd66214addc271042fec826b61ec7c2b7dd.svg';
const imgLine9 =
  'http://localhost:3845/assets/d2af142afddf1b573b112863bc41d4255e977a18.svg';
const imgVector2 =
  'http://localhost:3845/assets/908349e073a4ab5f9586ca48eff588e088063ae2.svg';
const imgEllipse4 =
  'http://localhost:3845/assets/321c17304a3059e8f89db21c4c964ecd05486284.svg';
const imgLine10 =
  'http://localhost:3845/assets/32126112b53a51fdc27d6958f7ef435b4ddff3f3.svg';
const imgLine11 =
  'http://localhost:3845/assets/1361086a8f0f419f1cdbdeac9fbe6653810af24b.svg';

const WeekendPlanner = () => {
  return (

    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Tonight's pick section */}
      <TonightsPick
        imgF15E36610Edbf10101B9Adda6F5D07Ba1={imgF15E36610Edbf10101B9Adda6F5D07Ba1}
        imgVector={imgVector}
        imgEllipse2={imgEllipse2}
        imgLine8={imgLine8}
        imgVector1={imgVector1}
        imgEllipse3={imgEllipse3}
        imgLine9={imgLine9}
        imgVector2={imgVector2}
        imgEllipse4={imgEllipse4}
        imgLine10={imgLine10}
      />

      {/* Other things happening tonight - Horizontal cards */}
      <OtherThingsTonight
        imgA46733B363D658Bf409588Ee7F41458D1={imgA46733B363D658Bf409588Ee7F41458D1}
        imgLine11={imgLine11}
      />

      {/* Filter buttons section */}
      <FilterButtons />
    </div>
  );
};

export default WeekendPlanner;
