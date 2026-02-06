import FilterButtons from '../FilterButtons'
import OtherThingsTonight from '../OtherThingsTonight'
import TonightsPick from '../TonightsPick'

// Image assets from Figma
import imgF15E36610Edbf10101B9Adda6F5D07Ba1 from '../../assets/5390659823fabdebd8931f08687d3530ebbb52ae.png'

import imgVector from '../../assets/5476204c7255fb6b2cf1744b23da45531f9ec294.svg'
import imgEllipse2 from '../../assets/b99c9f0519591c0e054861198990e2e3a31105e7.svg'
import imgLine8 from '../../assets/8101a426a381d8b3910a0339db39b766e49c0f5c.svg'
import imgVector1 from '../../assets/ede80fe6f0c1d3f159bac3e7ccd3a276b58cbc7d.svg'
import imgEllipse3 from '../../assets/17f46fd66214addc271042fec826b61ec7c2b7dd.svg'
import imgLine9 from '../../assets/d2af142afddf1b573b112863bc41d4255e977a18.svg'
import imgVector2 from '../../assets/908349e073a4ab5f9586ca48eff588e088063ae2.svg'
import imgEllipse4 from '../../assets/321c17304a3059e8f89db21c4c964ecd05486284.svg'
import imgLine10 from '../../assets/32126112b53a51fdc27d6958f7ef435b4ddff3f3.svg'

const WeekendPlanner = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      {/* Tonight's pick section */}
      <TonightsPick
        imgF15E36610Edbf10101B9Adda6F5D07Ba1={
          imgF15E36610Edbf10101B9Adda6F5D07Ba1
        }
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
      <OtherThingsTonight />

      {/* Filter buttons section */}
      <FilterButtons />
    </div>
  )
}

export default WeekendPlanner
