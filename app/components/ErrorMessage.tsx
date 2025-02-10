interface ErrorMessageProps {
  message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="bg-pastel-pink p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops!</h2>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  )
}

