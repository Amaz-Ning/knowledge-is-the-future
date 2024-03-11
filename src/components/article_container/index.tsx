import Style from './index.module.scss'
const ArticleContainer = () => {
    const label = 'haha'
    return <div className={Style.container}>
        <header>
            {label}
        </header>
        <div className='article_box'>
        </div>
    </div>

};

export default ArticleContainer;