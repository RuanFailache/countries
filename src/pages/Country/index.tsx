import { FaArrowLeft } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import TitledCell from '../../components/TitledCell'
import useGetCountryByName from './hooks/useGetCountry'

export default function Country() {
  const { name } = useParams()
  const { country, countryCells, loading } = useGetCountryByName(name)

  if (loading || !country) return <div>Carregando...</div>

  console.log({ countryCells, country })

  return (
    <div>
      <header>
        <button type="button">
          <FaArrowLeft />
          <span>back</span>
        </button>
      </header>

      <main>
        <img src={country.flag} alt={`flag of ${country.name}`} />

        <section>
          <h1>{country.name}</h1>

          <div style={{ backgroundColor: 'red' }}>
            {countryCells.map((cell) => (
              <TitledCell
                key={cell.title}
                title={cell.title}
                subtitle={cell.subtitle}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
