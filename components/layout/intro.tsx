import Image from 'next/image'

const Intro = () => {
  return (
    <section className="flex-row flex items-center mt-16 mb-16 md:mb-12">
      <Image
        src='/assets/blog/logo/logo-black-font.png'
        alt='logo'
        className=''
        width={400}
        height={109}
      />
    </section>
  )
}

export default Intro
