// 文件路径：api/chat.js
export const config = {
    runtime: 'edge', // 必须开启边缘计算，为了支持打字机流式输出！
};

export default async function handler(req) {
    // 1. 只允许 POST 请求
    if (req.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    try {
        // 2. 接收前端传过来的参数（就是你那些 prompt 和文章内容）
        const body = await req.json();

        // 3. 在服务器偷偷带上你的 API Key 去请求 DeepSeek
        // process.env.DEEPSEEK_API_KEY 就是我们一会要在 Vercel 里藏的变量
        const response = await fetch('https://api.deepseek.com/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const errorText = await response.text();
            return new Response(`DeepSeek API Error: ${errorText}`, { status: response.status });
        }

        // 4. 把 DeepSeek 的流式数据原封不动地“管道”传回给前端
        return new Response(response.body, {
            headers: { 'Content-Type': 'text/event-stream' }
        });

    } catch (error) {
        return new Response(`Server Error: ${error.message}`, { status: 500 });
    }
}