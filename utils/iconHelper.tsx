import Email from '../icons/email.svg';
import Facebook from '../icons/facebook.svg';
import Instagram from '../icons/instagram.svg'

export const getSocialIcon = (iconName:string) => {
  // console.log(iconName)
  switch(iconName) {
    case 'Instagram':
      return <Instagram/>
    case 'Email':
      return <Email/>
  }
  return <Facebook/>
}
