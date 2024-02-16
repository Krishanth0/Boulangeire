import React from 'react';
import bg2 from '../assets/hat.png';

const About = () => {
  return (
    <div className="relative">
      <img src={bg2} alt="/" className="w-full h-full" />

      <div className="absolute top-0 right-0 w-full h-full flex items-center justify-end text-center">
      <div className="w-[588px] h-[500px] bg-white bg-opacity-90">
      <h1 className="text-black text-4xl font-normal">A propos</h1>
        <p className="text-1xl mb-4">Lorem ipsum dolor sit amet consectetur. Bibendum nulla proin neque vitae. Ipsum mattis vel sed tortor feugiat risus. Vulputate nunc volutpat enim nulla. Nisl eget neque diam magna at facilisis consequat aliquet. Mauris egestas quis nisl pharetra risus.
        Lectus quis dolor senectus mi. Arcu turpis felis sit netus vitae diam a risus. Leo nibh enim magna cursus sit faucibus mauris. Id quis aliquam ac pretium. Non lectus leo aliquam dignissim ipsum ut amet. Ornare vitae dignissim volutpat in. Facilisis ipsum sapien sem auctor nec pellentesque. 
        Adipiscing eget eget tristique iaculis eget et quis nunc rutrum. Duis tellus donec nunc hendrerit rhoncus.
        Lectus cursus tortor convallis risus. Nunc potenti magna volutpat congue sit. Facilisis sagittis tellus egestas odio a faucibus tincidunt donec magna. Ullamcorper etiam elit risus amet.
        </p>
        </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center text-center">
          <h1 className="text-white text-4xl mb-2">Produits de qualité</h1>
          <p className="text-white text-1xl mb-4">Lorem ipsum dolor sit amet consectetur. Nisl arcu at donec purus semper morbi accumsan tortor.</p>
          </div>
          </div>
  );
}

export default About