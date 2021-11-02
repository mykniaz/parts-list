import {apartmentPartList} from './partList';

const HomePage: React.FC<{}> = () => {
  return (
    <div>
      {
        apartmentPartList.map((room) => {
          return (
            <div className="mb-8 p-4 border rounded-md" key={room.name}>
              <h2 className="mb-4">{room.name}</h2>

              <div>
                {room.groups.map((group, groupIndex) => {
                  return (
                    <div className="mb-4 flex" key={groupIndex}>
                      {group.map((part, partIndex) => {
                        return (
                          <div className='px-4 py-2 border' key={partIndex} title={part.description}>
                            {partIndex} {part.title}
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default HomePage;
