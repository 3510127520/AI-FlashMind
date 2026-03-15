// 文件路径：api/chat.js
export const config = { runtime: 'edge' };

export default async function handler(req) {
    if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

    try {
        const body = await req.json();

        // 去找 DeepSeek 拿数据
        const response = await fetch('https://api.deepseek.com/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify(body)
        });

        // 【最关键的修复】：不要自作聪明改头文件，DeepSeek 给什么，我们就原样返回给前端！
        return new Response(response.body, {
            status: response.status,
            headers: response.headers 
        });

    } catch (error) {
        return new Response(`Server Error: ${error.message}`, { status: 500 });
    }
}
