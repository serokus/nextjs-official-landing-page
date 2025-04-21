import { Loader2 } from 'lucide-react'

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <Loader2 className="animate-spin" />
    </div>
  )
}

export default Loading
