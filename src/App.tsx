import { useState } from 'react'
import { Button } from './components/ui/button'
import { Textarea } from './components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Copy, Code2, Sparkles } from 'lucide-react'
import { toast } from 'react-hot-toast'

function App() {
  const [inputText, setInputText] = useState('')
  const [leetspeakText, setLeetspeakText] = useState('')

  // Leetspeak conversion map
  const leetspeakMap: { [key: string]: string } = {
    'A': '4', 'a': '4',
    'E': '3', 'e': '3',
    'I': '1', 'i': '1',
    'O': '0', 'o': '0',
    'S': '5', 's': '5',
    'T': '7', 't': '7',
    'B': '8', 'b': '6',
    'G': '9', 'g': '9',
    'L': '1', 'l': '|',
    'Z': '2', 'z': '2'
  }

  const convertToLeetspeak = (text: string): string => {
    return text.split('').map(char => leetspeakMap[char] || char).join('')
  }

  const handleConvert = () => {
    if (!inputText.trim()) {
      toast.error('Please enter some text to convert!')
      return
    }
    
    const converted = convertToLeetspeak(inputText)
    setLeetspeakText(converted)
    toast.success('Converted to leetspeak!')
  }

  const copyToClipboard = async () => {
    if (!leetspeakText) {
      toast.error('Nothing to copy!')
      return
    }
    
    const markdownOutput = `\`\`\`\n${leetspeakText}\n\`\`\``
    
    try {
      await navigator.clipboard.writeText(markdownOutput)
      toast.success('Copied markdown to clipboard!')
    } catch {
      toast.error('Failed to copy to clipboard')
    }
  }

  const markdownOutput = leetspeakText ? `\`\`\`\n${leetspeakText}\n\`\`\`` : ''

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ⊰ L337SP34K ⊱
          </h1>
          <div className="text-2xl font-mono text-cyan-300 mb-2">
            ⦑ PR1N73R ⦒
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Convert your text into l33t sp34k and output it in markdown format. 
            Perfect for that retro hacker aesthetic! 🔥
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Input Section */}
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-cyan-400 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Input Text
              </CardTitle>
              <CardDescription className="text-gray-400">
                Enter the text you want to convert to leetspeak
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Type your message here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="min-h-32 bg-gray-900/50 border-gray-600 text-white placeholder-gray-500 focus:border-cyan-500 font-mono"
              />
              <Button 
                onClick={handleConvert}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Convert to L337SP34K
              </Button>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Leetspeak Output
              </CardTitle>
              <CardDescription className="text-gray-400">
                Your text converted to l33t sp34k in markdown format
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="min-h-32 bg-gray-900/50 border border-gray-600 rounded-md p-4 font-mono text-green-400">
                {leetspeakText ? (
                  <div className="space-y-2">
                    <div className="text-cyan-400 text-sm">Leetspeak:</div>
                    <div className="text-xl">{leetspeakText}</div>
                    <div className="text-cyan-400 text-sm mt-4">Markdown:</div>
                    <div className="text-yellow-400 text-sm">
                      {markdownOutput}
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-500 italic text-center py-8">
                    Your converted text will appear here...
                  </div>
                )}
              </div>
              <Button 
                onClick={copyToClipboard}
                disabled={!leetspeakText}
                variant="outline"
                className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Markdown
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Character Map */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-black/40 border-pink-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-pink-400 text-center">Character Conversion Map</CardTitle>
              <CardDescription className="text-gray-400 text-center">
                See how letters are converted to l33t sp34k
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-4 text-center font-mono">
                {Object.entries(leetspeakMap).filter((_, index) => index % 2 === 0).map(([original, leet]) => (
                  <div key={original} className="bg-gray-800/50 rounded-lg p-3 border border-gray-600">
                    <div className="text-cyan-400 text-lg font-bold">{original}</div>
                    <div className="text-gray-500">→</div>
                    <div className="text-green-400 text-lg font-bold">{leet}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App