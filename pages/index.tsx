import type { GetServerSideProps, NextPage } from 'next';
import { getMitenProfileData } from "../lib/firebase/profiles";
import { Profile } from "../models";

export interface HomeProps {
  profile: Profile;
}

const Home: NextPage<HomeProps> = ({ profile }) => {
  console.log(profile);

  return (
    <code>{JSON.stringify(profile)}</code>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const profile = await getMitenProfileData();

  return {
    props: { profile },
  };
};

export default Home
