import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Textarea } from './components/ui/textarea'
import { Input } from './components/ui/input'
import { Card } from './components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Switch } from './components/ui/switch'

import { 
  Sparkles, 
  Code2, 
  Eye, 
  Globe, 
  Settings, 
  MessageSquare, 
  History, 
  Languages,
  Moon,
  Sun,

  Copy,
  Share,
  Loader2,
  ArrowUp,
  Zap,
  Users,
  Clock,
  ChevronRight
} from 'lucide-react'
import { toast } from 'react-hot-toast'

// Mock UI templates
const templates = {
  'food delivery app': `
<div className="min-h-screen bg-white">
  <header className="bg-orange-500 text-white p-4">
    <h1 className="text-2xl font-bold">FoodieApp</h1>
  </header>
  <div className="p-4">
    <div className="mb-6">
      <input 
        type="text" 
        placeholder="Search restaurants..." 
        className="w-full p-3 border rounded-lg"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
        <h3 className="font-bold">Pizza Palace</h3>
        <p className="text-gray-600">Italian • 25-30 min</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-bold">$15 delivery</span>
          <button className="bg-orange-500 text-white px-3 py-1 rounded">Order</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
        <h3 className="font-bold">Burger Junction</h3>
        <p className="text-gray-600">Fast Food • 15-20 min</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-bold">$12 delivery</span>
          <button className="bg-orange-500 text-white px-3 py-1 rounded">Order</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
  
  'social media dashboard': `
<div className="min-h-screen bg-gray-100">
  <nav className="bg-blue-600 text-white p-4">
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">SocialHub</h1>
      <div className="flex items-center gap-4">
        <span>Welcome, John!</span>
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </div>
    </div>
  </nav>
  <div className="p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Total Followers</h3>
        <p className="text-3xl font-bold text-blue-600">12.5K</p>
        <p className="text-green-500">+5.2% this week</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Engagement Rate</h3>
        <p className="text-3xl font-bold text-purple-600">8.7%</p>
        <p className="text-green-500">+2.1% this week</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Posts This Month</h3>
        <p className="text-3xl font-bold text-orange-600">24</p>
        <p className="text-red-500">-3 from last month</p>
      </div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
      <div className="space-y-4">
        <div className="border-l-4 border-blue-500 pl-4">
          <p className="font-medium">Just launched our new feature!</p>
          <p className="text-gray-600">2 hours ago • 45 likes • 12 comments</p>
        </div>
        <div className="border-l-4 border-green-500 pl-4">
          <p className="font-medium">Behind the scenes look at our office</p>
          <p className="text-gray-600">1 day ago • 89 likes • 23 comments</p>
        </div>
      </div>
    </div>
  </div>
</div>`,

  'e-commerce store': `
<div className="min-h-screen bg-white">
  <header className="bg-black text-white p-4">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">StyleShop</h1>
      <div className="flex items-center gap-4">
        <span>Cart (3)</span>
        <button className="bg-white text-black px-4 py-2 rounded">Login</button>
      </div>
    </div>
  </header>
  <div className="p-6">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold mb-4">Summer Collection</h2>
      <p className="text-gray-600">Discover the latest trends</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-white border rounded-lg overflow-hidden">
        <div className="w-full h-48 bg-gray-200"></div>
        <div className="p-4">
          <h3 className="font-bold">Classic T-Shirt</h3>
          <p className="text-gray-600">$29.99</p>
          <button className="w-full bg-black text-white py-2 rounded mt-2">Add to Cart</button>
        </div>
      </div>
      <div className="bg-white border rounded-lg overflow-hidden">
        <div className="w-full h-48 bg-gray-200"></div>
        <div className="p-4">
          <h3 className="font-bold">Denim Jacket</h3>
          <p className="text-gray-600">$89.99</p>
          <button className="w-full bg-black text-white py-2 rounded mt-2">Add to Cart</button>
        </div>
      </div>
      <div className="bg-white border rounded-lg overflow-hidden">
        <div className="w-full h-48 bg-gray-200"></div>
        <div className="p-4">
          <h3 className="font-bold">Sneakers</h3>
          <p className="text-gray-600">$129.99</p>
          <button className="w-full bg-black text-white py-2 rounded mt-2">Add to Cart</button>
        </div>
      </div>
      <div className="bg-white border rounded-lg overflow-hidden">
        <div className="w-full h-48 bg-gray-200"></div>
        <div className="p-4">
          <h3 className="font-bold">Summer Dress</h3>
          <p className="text-gray-600">$59.99</p>
          <button className="w-full bg-black text-white py-2 rounded mt-2">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>`,

  'task management app': `
<div className="min-h-screen bg-gray-50">
  <div className="bg-white shadow-sm border-b p-4">
    <h1 className="text-2xl font-bold text-gray-900">TaskFlow</h1>
  </div>
  <div className="p-6">
    <div className="mb-6">
      <input 
        type="text" 
        placeholder="Add a new task..." 
        className="w-full p-3 border rounded-lg"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-bold text-gray-700 mb-3">To Do</h3>
        <div className="space-y-3">
          <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
            <p className="font-medium">Design homepage mockup</p>
            <p className="text-sm text-gray-600">Due: Today</p>
          </div>
          <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="font-medium">Review pull requests</p>
            <p className="text-sm text-gray-600">Due: Tomorrow</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-bold text-gray-700 mb-3">In Progress</h3>
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
            <p className="font-medium">Implement user authentication</p>
            <p className="text-sm text-gray-600">Started: 2 hours ago</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow">
        <h3 className="font-bold text-gray-700 mb-3">Done</h3>
        <div className="space-y-3">
          <div className="p-3 bg-green-50 border-l-4 border-green-400 rounded">
            <p className="font-medium">Setup project repository</p>
            <p className="text-sm text-gray-600">Completed: Yesterday</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
}

// Suggested prompts for quick starts
const suggestedPrompts = [
  "أنشئ متجر إلكتروني لبيع الملابس",
  "Create a food delivery app",
  "أنشئ تطبيق توصيل طعام",
  "Design a social media dashboard",
  "Create a task management app",
  "ابن موقع شركة احترافي"
]

function App() {
  const [prompt, setPrompt] = useState('')
  const [generatedCode, setGeneratedCode] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isPublic, setIsPublic] = useState(true)
  const [activeTab, setActiveTab] = useState('preview')
  const [language, setLanguage] = useState<'en' | 'ar'>('en')
  const [darkMode, setDarkMode] = useState(false)
  const [projects] = useState(0) // eslint-disable-line @typescript-eslint/no-unused-vars
  const [shareableLink, setShareableLink] = useState('')

  // Auto-detect system theme
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setDarkMode(mediaQuery.matches)
    
    const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const translations = {
    en: {
      title: "Build something Lovable",
      subtitle: "Create apps and websites by chatting with AI",
      placeholder: "Ask Lovable to create an internal tool that...",
      generateBtn: "Generate UI",
      preview: "Preview",
      code: "Code",
      publish: "Publish",
      public: "Public",
      projects: "projects",
      possibilities: "possibilities",
      available: "available",
      generating: "Generating your app...",
      published: "Published successfully!",
      copied: "Code copied to clipboard!",
      quickSuggestions: "Quick suggestions",
      stats: {
        projects: "0",
        possibilities: "∞",
        available: "24/7"
      }
    },
    ar: {
      title: "ابن شيئاً محبوباً",
      subtitle: "أنشئ تطبيقات ومواقع ويب بالمحادثة مع الذكاء الاصطناعي",
      placeholder: "اطلب من لوفابل إنشاء أداة داخلية...",
      generateBtn: "إنشاء واجهة",
      preview: "معاينة",
      code: "كود",
      publish: "نشر",
      public: "عام",
      projects: "مشاريع",
      possibilities: "إمكانيات",
      available: "متاح",
      generating: "جارٍ إنشاء تطبيقك...",
      published: "تم النشر بنجاح!",
      copied: "تم نسخ الكود!",
      quickSuggestions: "اقتراحات سريعة",
      stats: {
        projects: "0",
        possibilities: "∞",
        available: "24/7"
      }
    }
  }

  const t = translations[language]

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error(language === 'en' ? 'Please enter a prompt!' : 'يرجى إدخال وصف!')
      return
    }

    setIsGenerating(true)
    setActiveTab('preview')
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Find matching template or use default
    const lowerPrompt = prompt.toLowerCase()
    let selectedTemplate = templates['food delivery app'] // default
    
    for (const [key, template] of Object.entries(templates)) {
      if (lowerPrompt.includes(key) || lowerPrompt.includes(key.replace(' ', ''))) {
        selectedTemplate = template
        break
      }
    }
    
    setGeneratedCode(selectedTemplate)
    setIsGenerating(false)
    toast.success(language === 'en' ? 'UI generated successfully!' : 'تم إنشاء الواجهة بنجاح!')
  }

  const handlePublish = () => {
    if (!generatedCode) {
      toast.error(language === 'en' ? 'Nothing to publish!' : 'لا يوجد شيء للنشر!')
      return
    }
    
    // Save to localStorage
    const projectId = Date.now().toString()
    localStorage.setItem(`project-${projectId}`, JSON.stringify({
      prompt,
      code: generatedCode,
      createdAt: new Date().toISOString()
    }))
    
    // Generate shareable link
    const link = `${window.location.origin}/#/project/${projectId}`
    setShareableLink(link)
    
    toast.success(t.published)
  }

  const copyCode = async () => {
    if (!generatedCode) return
    
    try {
      await navigator.clipboard.writeText(generatedCode)
      toast.success(t.copied)
    } catch {
      toast.error(language === 'en' ? 'Failed to copy' : 'فشل في النسخ')
    }
  }

  const copyShareLink = async () => {
    if (!shareableLink) return
    
    try {
      await navigator.clipboard.writeText(shareableLink)
      toast.success(language === 'en' ? 'Link copied!' : 'تم نسخ الرابط!')
    } catch {
      toast.error(language === 'en' ? 'Failed to copy link' : 'فشل في نسخ الرابط')
    }
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900'
    } text-white ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      
      {/* Animated Background Effects */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">UIBuilder</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="text-white hover:bg-white/10"
              >
                <Languages className="w-4 h-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="text-white hover:bg-white/10"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 pb-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl opacity-80">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              {t.title}
            </h1>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              {t.subtitle}
            </p>

            {/* Main Input */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-1 border border-gray-700/50">
                <div className="bg-gray-800/50 rounded-xl p-4">
                  <Textarea
                    placeholder={t.placeholder}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full min-h-20 bg-transparent border-none text-white placeholder-gray-400 text-base resize-none focus:ring-0 focus-visible:ring-0"
                  />
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-3">
                      <Switch 
                        checked={isPublic} 
                        onCheckedChange={setIsPublic}
                        className="data-[state=checked]:bg-cyan-500"
                      />
                      <span className="text-sm text-gray-300 font-medium">{t.public}</span>
                    </div>
                    
                    <Button 
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 flex items-center gap-2"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          {t.generating}
                        </>
                      ) : (
                        <>
                          <ArrowUp className="w-4 h-4" />
                          {t.generateBtn}
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Suggestions */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-center text-sm font-medium mb-4 text-gray-400">
              {t.quickSuggestions}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {suggestedPrompts.slice(0, 6).map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => setPrompt(suggestion)}
                  className="border-gray-700/50 text-gray-300 hover:bg-gray-800/50 hover:text-white justify-between h-auto p-3 text-sm bg-gray-900/20 backdrop-blur-sm"
                >
                  <span className="truncate">{suggestion}</span>
                  <ChevronRight className="w-3 h-3 ml-2 flex-shrink-0" />
                </Button>
              ))}
            </div>
          </div>

          {/* Results Section */}
          {(generatedCode || isGenerating) && (
            <div className="max-w-6xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex justify-between items-center mb-6">
                  <TabsList className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50">
                    <TabsTrigger value="preview" className="data-[state=active]:bg-cyan-500">
                      <Eye className="w-4 h-4 mr-2" />
                      {t.preview}
                    </TabsTrigger>
                    <TabsTrigger value="code" className="data-[state=active]:bg-purple-500">
                      <Code2 className="w-4 h-4 mr-2" />
                      {t.code}
                    </TabsTrigger>
                  </TabsList>
                  
                  <div className="flex gap-3">
                    <Button
                      onClick={copyCode}
                      variant="outline"
                      size="sm"
                      className="border-gray-700/50 text-gray-300 hover:bg-gray-800/50"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    
                    <Button
                      onClick={handlePublish}
                      className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      {t.publish}
                    </Button>
                  </div>
                </div>

                <TabsContent value="preview" className="mt-0">
                  <Card className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 min-h-96">
                    {isGenerating ? (
                      <div className="flex items-center justify-center h-96">
                        <div className="text-center">
                          <Loader2 className="w-12 h-12 animate-spin text-cyan-400 mx-auto mb-4" />
                          <p className="text-gray-300">{t.generating}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4">
                        <iframe
                          srcDoc={`
                            <!DOCTYPE html>
                            <html>
                              <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <script src="https://cdn.tailwindcss.com"></script>
                              </head>
                              <body>
                                ${generatedCode}
                              </body>
                            </html>
                          `}
                          className="w-full h-96 rounded-lg border-0"
                          title="Preview"
                        />
                      </div>
                    )}
                  </Card>
                </TabsContent>

                <TabsContent value="code" className="mt-0">
                  <Card className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50">
                    <div className="p-4">
                      <Textarea
                        value={generatedCode}
                        onChange={(e) => setGeneratedCode(e.target.value)}
                        className="w-full min-h-96 bg-gray-900/50 border-gray-600 text-white font-mono text-sm"
                        placeholder="Generated code will appear here..."
                      />
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Share Link */}
              {shareableLink && (
                <div className="mt-6 p-4 bg-green-500/20 backdrop-blur-sm rounded-lg border border-green-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-400 font-medium">Project Published!</p>
                      <p className="text-sm text-gray-300">Share your creation:</p>
                    </div>
                    <Button
                      onClick={copyShareLink}
                      variant="outline"
                      size="sm"
                      className="border-green-500/50 text-green-400 hover:bg-green-500/20"
                    >
                      <Share className="w-4 h-4 mr-2" />
                      Copy Link
                    </Button>
                  </div>
                  <Input
                    value={shareableLink}
                    readOnly
                    className="mt-2 bg-black/30 border-green-500/30 text-white"
                  />
                </div>
              )}
            </div>
          )}

          {/* Stats Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="bg-gray-900/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                <div className="text-4xl font-bold text-cyan-400 mb-2 flex items-center justify-center gap-2">
                  <Users className="w-8 h-8" />
                  {t.stats.projects}
                </div>
                <div className="text-gray-400 text-sm">{t.projects}</div>
              </div>
              <div className="bg-gray-900/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                <div className="text-4xl font-bold text-purple-400 mb-2 flex items-center justify-center gap-2">
                  <Zap className="w-8 h-8" />
                  {t.stats.possibilities}
                </div>
                <div className="text-gray-400 text-sm">{t.possibilities}</div>
              </div>
              <div className="bg-gray-900/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30">
                <div className="text-4xl font-bold text-pink-400 mb-2 flex items-center justify-center gap-2">
                  <Clock className="w-8 h-8" />
                  {t.stats.available}
                </div>
                <div className="text-gray-400 text-sm">{t.available}</div>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-gray-900/40 backdrop-blur-lg rounded-full p-2 border border-gray-700/50">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" className="rounded-full text-white hover:bg-white/20">
                <Sparkles className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full text-white hover:bg-white/20">
                <MessageSquare className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full text-white hover:bg-white/20">
                <History className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full text-white hover:bg-white/20">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App