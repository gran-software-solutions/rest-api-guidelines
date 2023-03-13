import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Learn more about Web API fundamentals',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Building a Rest API requires solid foundations. From Outside-In thinking, to the principles of
                simplicity, consistency and flexibility. Learn how to build APIs others will love.
                Read about <a className={styles.link} href="docs/web-apis-fundamentals">Web API fundamentals</a>
            </>
        ),
    },
    {
        title: 'Real world like examples',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                If you prefer learning from examples, you'll love the real world like examples we came up with.
                We used OpenAPI format, an industry standard. Get started with <a className={styles.link}
                                                                                  href="docs/category/example-apis">examples</a>
            </>
        ),
    },
    {
        title: 'Design consistent APIs with our guidelines',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                To make sure your APIs feel simple, intuitive and consistent, follow our set of <a
                className={styles.link} href="docs/category/guidelines">guidelines</a>
            </>),
    }
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
