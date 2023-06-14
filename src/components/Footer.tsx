
export const Footer = () => {
  return (
    <>
      <div className="breakContainer  bg-green-600 p-6">

        <div className="container mx-auto">


          <ul className=" flex justify-evenly text-white">
            <li>
              <picture>
              <source srcSet="/images/webp/instagram.webp" type="image/webp" />
                <img className="w-10" src="/images/normal/instagram.png" alt="Instagram Logo" />
              </picture>
            </li>
            <li>
              <picture>
              <source srcSet="/images/webp/facebook.webp" type="image/webp" />
                <img className="w-10" src="/images/normal/facebook.png" alt="Facebook Logo" />
              </picture>
            </li>
            <li>
              <picture>
              <source srcSet="/images/webp/whatsapp.webp" type="image/webp" />
                <img className="w-10" src="/images/normal/whatsapp.png" alt="Whatsapp Logo" />
              </picture>

            </li>
            <picture>

              <li>
              <source srcSet="/images/webp/gmail.webp" type="image/webp" />
                <img className="w-10" src="/images/normal/gmail.png" alt="Gmail Logo" />
              </li>
            </picture>

          </ul>

        <p className="text-white text-center mt-2">© FootBallFever 2023. All rights reserved. | Privacy Policy | Terms of Service | Contact Us</p>
        </div>

      </div>

    </>
  )
}
export default Footer