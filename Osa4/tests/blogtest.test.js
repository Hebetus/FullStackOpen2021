const listHelper = require('../utils/list_helper.js')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)


describe('dummy', () => {
    test('dummy returns one', () => {
        const blogs = []
    
        const result = listHelper.dummy(blogs)
        expect(result).toBe(1)
    })
})

describe('total likes', () => {
    const blogs = [
        {
        _id: "614304c567852273db0ba086",
        title: "testi",
        author: "Matti Meikäläinen",
        url: "http://localhost:3003/api/blogs",
        likes: 4,
        __v: 0
        },
        {
            _id: "614304c567852273db0ba086",
            title: "testi",
            author: "Matti Meikäläinen",
            url: "http://localhost:3003/api/blogs",
            likes: 6,
            __v: 0
        }
    ]
    test('expect total amount of likes to be 10', () => {
        const total = listHelper.totalLikes(blogs)
        expect(total).toBe(10)
    })
})

describe('most likes on a single blog', () => {
    const blogs = [
        {
          _id: "5a422a851b54a676234d17f7",
          title: "React patterns",
          author: "Michael Chan",
          url: "https://reactpatterns.com/",
          likes: 7,
          __v: 0
        },
        {
          _id: "5a422aa71b54a676234d17f8",
          title: "Go To Statement Considered Harmful",
          author: "Edsger W. Dijkstra",
          url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
          likes: 5,
          __v: 0
        },
        {
          _id: "5a422b3a1b54a676234d17f9",
          title: "Canonical string reduction",
          author: "Edsger W. Dijkstra",
          url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
          likes: 12,
          __v: 0
        },
        {
          _id: "5a422b891b54a676234d17fa",
          title: "First class tests",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
          likes: 10,
          __v: 0
        },
        {
          _id: "5a422ba71b54a676234d17fb",
          title: "TDD harms architecture",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
          likes: 0,
          __v: 0
        },
        {
          _id: "5a422bc61b54a676234d17fc",
          title: "Type wars",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
          likes: 2,
          __v: 0
        }  
      ]
    test('expect most likes to be "Canonical String reduction"', () => {
        const biggest = listHelper.favoriteBlog(blogs)
        const biggestBlog = blogs[2]
        expect(biggest).toEqual(biggestBlog)
    })
})

describe('most blogs', () => {
    const blogs = [
        {
          _id: "5a422a851b54a676234d17f7",
          title: "React patterns",
          author: "Michael Chan",
          url: "https://reactpatterns.com/",
          likes: 7,
          __v: 0
        },
        {
          _id: "5a422aa71b54a676234d17f8",
          title: "Go To Statement Considered Harmful",
          author: "Edsger W. Dijkstra",
          url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
          likes: 5,
          __v: 0
        },
        {
          _id: "5a422b3a1b54a676234d17f9",
          title: "Canonical string reduction",
          author: "Edsger W. Dijkstra",
          url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
          likes: 12,
          __v: 0
        },
        {
          _id: "5a422b891b54a676234d17fa",
          title: "First class tests",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
          likes: 10,
          __v: 0
        },
        {
          _id: "5a422ba71b54a676234d17fb",
          title: "TDD harms architecture",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
          likes: 0,
          __v: 0
        },
        {
          _id: "5a422bc61b54a676234d17fc",
          title: "Type wars",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
          likes: 2,
          __v: 0
        }  
      ]
    test('expect most blogs to be Robert C. Martin', () => {
        const most1 = listHelper.mostBlogs(blogs)
        const most2 = {
            author: "Robert C. Martin",
            amount: 3
        }
        expect(most1).toEqual(most2)
    })
})

describe('most total likes', () => {
    const blogs = [
        {
          _id: "5a422a851b54a676234d17f7",
          title: "React patterns",
          author: "Michael Chan",
          url: "https://reactpatterns.com/",
          likes: 7,
          __v: 0
        },
        {
          _id: "5a422aa71b54a676234d17f8",
          title: "Go To Statement Considered Harmful",
          author: "Edsger W. Dijkstra",
          url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
          likes: 5,
          __v: 0
        },
        {
          _id: "5a422b3a1b54a676234d17f9",
          title: "Canonical string reduction",
          author: "Edsger W. Dijkstra",
          url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
          likes: 12,
          __v: 0
        },
        {
          _id: "5a422b891b54a676234d17fa",
          title: "First class tests",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
          likes: 10,
          __v: 0
        },
        {
          _id: "5a422ba71b54a676234d17fb",
          title: "TDD harms architecture",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
          likes: 0,
          __v: 0
        },
        {
          _id: "5a422bc61b54a676234d17fc",
          title: "Type wars",
          author: "Robert C. Martin",
          url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
          likes: 2,
          __v: 0
        }  
      ]
    test('expect most total likes to be Edsger W. Dijkstra', () => {
        const most1 = listHelper.mostLikes(blogs)
        const most2 = {
            author: "Edsger W. Dijkstra",
            likes: 17
        }
        expect(most1).toEqual(most2)
    })
})

describe('test for the amount of blogs', () => {
  test('3 blogs are returned from database', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(response.body.length)
    })
})

describe('test for the id field of a blog', () => {
  test('each blog returned has the id field', async () => {
    const response = await api.get('/api/blogs')
    response.body.forEach(blog => {
      expect(blog.id).toBeDefined()
    })
  });
})

describe('test for adding blogs', () => {
  test('its possible to add blogs', async () => {
    const blog = {
      id: "4",
      title: "test",
      author: "test",
      url: "test",
      likes: 7
    }
    const response =
    await api
      .post('/api/blogs')
      .send(blog)
    expect(response.status).toBe(201)
  })
})

describe('test for adding a blog without the field likes', () => {
  test('expecting the likes value of the response to b 0', async () => {
    const blog = {
      id: "4",
      title: "this is a test blog",
      author: "written by mongoose",
      url: "https://doesntleadanywhere.com"
    }
    const response =
    await api
      .post('/api/blogs')
      .send(blog)
    expect(response.body.likes).toBe(0)
  })
})

describe('test for adding a blog without url or author', () => {
  test('expecting response to give a status of 400', async () => {
    const blog = {
      id: "4",
      title: "test"
    }
    const response =
    await api
      .post('/api/blogs')
      .send(blog)
    expect(response.status).toBe(400)
  })
})

afterAll(() => {
  mongoose.connection.close()
})