'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Andrés',
    avatar: 'A',
    title: 'Data Analyst',
    description: "This is the best AI application I've used"
  },
  {
    name: 'Pabs',
    avatar: 'P',
    title: 'Business Intelligence',
    description: 'Now I generate new pieces of content a lot easier for my team'
  },
  {
    name: 'Santiago',
    avatar: 'S',
    title: 'Business Management',
    description:
      'With this app now all of my team have acceletated their content creation rate'
  },
  {
    name: 'Sebastian',
    avatar: 'S',
    title: 'Quality Analyst',
    description:
      'I use it all of the time, not only in my work but as well for my bikers team on my free time'
  }
]
export const LandingContent = () => {
  return (
    <div className=' px-10 pb-20'>
      <h2 className=' text-center text-4xl text-white font-extrabold mb-10'>
        Testimonials
      </h2>
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className=' bg-[#192339] border-none text-white'>
            <CardHeader>
              <CardTitle className=' flex items-center gap-x-2'>
                <div>
                  <p className=' text-lg'>{item.name}</p>
                  <p className=' text-zinc-400 text-sm'>{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className=' pt-4 px-0'>
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
