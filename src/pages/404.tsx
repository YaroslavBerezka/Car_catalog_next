import Layout from '@/components/layout/Layout'
import {NextPage} from 'next'
import Image from 'next/image'

const NotFound: NextPage = () => {
    return (
        <Layout title='Not Found'>
            <Image priority src='/pngwing.com.png' alt='' width={450} height={433}/>
        </Layout>
    )
}

export default NotFound