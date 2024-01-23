import { collection, getDocs, query } from 'firebase/firestore'
import { db } from './firebase/DBcore'

async function Page () {
  const q = query(collection(db, 'products'))
  const querySnapshot = await getDocs(q)
  let docs: any[] = []

  querySnapshot.forEach((doc) => {
    const data = { ...doc.data(), id: doc.id }
    docs = [...docs, data]
  })

  return (
    <div>
      <h1>Products</h1>
      <main>
        {
          docs.map((product) => {
            return (
              <article key={product.id}>
                <h2>{product.title}</h2>
              </article>
            )
          })
        }
      </main>
    </div>
  )
}

export default Page
