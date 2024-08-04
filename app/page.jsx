import Feed from '@components/Feed'
import '@styles/globals.css'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            BidTogether
            <br className=""/>
            <span className="orange_gradient text-center">Find your new SMU groupmates today!</span>
        </h1>
            <p className="desc text-center">
                BigTogether is the app to find your ideal groupmates for the mods you are taking in the coming 
                semester to prevent pairings with people you cannot work with.
            </p>
            <Feed/>
        
    </section>
  )
}

export default Home