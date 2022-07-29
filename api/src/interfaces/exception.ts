export default interface HttpException extends Error {
  code?: number
  error?: {
    message: string
  }
}
