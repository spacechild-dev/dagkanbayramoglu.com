"use client";

import React from "react";
import {
    Heading,
    Text,
    Column,
    Flex,
    Row,
    Line
} from "@once-ui-system/core";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";

export default function BlogPost() {
  const post = {
    title: "UTM & ClickID Takibi: Parametreleri Tarayıcıda Saklama Rehberi",
    description: "UTM parametrelerini ve Click ID'leri localStorage/sessionStorage üzerinde saklayarak dijital pazarlama analizlerinizi nasıl iyileştirebileceğinizi öğrenin.",
    date: "2024-07-05",
    tags: ["marketing", "analytics", "tracking"],
  };

  return (
    <Column fillWidth horizontal="center" paddingY="128" paddingX="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="m" fillWidth gap="32">
        <Link href="/blog" style={{ textDecoration: 'none' }}>
            <Row vertical="center" gap="8">
                <HiOutlineArrowLeft size={16} />
                <Text variant="label-strong-s" onBackground="neutral-weak">Back to Blog</Text>
            </Row>
        </Link>

        <Column gap="12">
            <Text variant="code-default-s" onBackground="neutral-weak">{post.date}</Text>
            <Heading variant="display-strong-m">{post.title}</Heading>
            <Flex gap="8" wrap>
                {post.tags.map((tag) => (
                    <Flex key={tag} paddingX="8" paddingY="4" radius="m" background="neutral-alpha-weak">
                        <Text variant="code-default-xs">#{tag}</Text>
                    </Flex>
                ))}
            </Flex>
        </Column>

        <Line background="neutral-alpha-weak" />

        <Column gap="24">
            <Text variant="body-default-l" onBackground="neutral-strong">
                Dijital pazarlama ve performans analizinde, <strong>UTM parametreleri</strong> ve tıklama id'leri (Click ID) gibi izleme parametreleri web sitesi ziyaretçilerini daha iyi anlamak için kritik bir rol oynuyor. Bu yazıda ziyaretçilerin ilk ziyaretinde adres çubuğunda görünen parametreleri nasıl saklayabileceğimize ve sonrasında kullanabileceğimize değineceğim.
            </Text>

            <Column gap="12">
                <Heading variant="heading-strong-l">Kodun Amacı Nedir?</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                    Bu script’in ana amacı, ziyaretçilerin ilk ziyaret sırasında URL ile getirdiği izleme parametrelerini (örneğin: utm_source, utm_medium, gclid, fbclid gibi) yakalamak ve bunları yerel depolama (localStorage) ile oturum depolama (sessionStorage) içerisinde saklamaktır. Böylece, kullanıcı sitenizde gezinirken bu veriler kaybolmaz ve gerektiğinde kullanabilirsiniz. Aksi taktirde ilk sayfa ziyaretinde adres çubuğunda beliren takip parametreleri bir sonraki sayfa ziyaretinde kırılacaktır.
                </Text>
            </Column>

            <Column gap="12">
                <Heading variant="heading-strong-l">Script Nasıl Çalışır?</Heading>
                
                <Heading variant="heading-strong-m">1. Hangi parametreleri takip etmek istediğimizi tanımlıyoruz.</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                    Kodun başında bir dizi parametre tanımlıyorsunuz:
                </Text>
                <CodeBlock
                    lineNumbers
                    compact
                    codes={[
                        {
                            language: "javascript",
                            label: "tracked_params.js",
                            code: `const TRACKED_PARAMS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'
];`
                        }
                    ]}
                />
                <Text variant="body-default-m" onBackground="neutral-weak">
                    Biz burada birincil önemdeki utm parametrelerini ve en sık kullanılan iki platforma ait reklam tıklama id'lerini tercih ettik. Siz istediğiniz kadar parametre dahil edebilirsiniz.
                </Text>

                <Heading variant="heading-strong-m">2. Parametreleri Yakala</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                    Kullanıcı siteye bir linkten geldiğinde, script URL’de bu parametreleri arar ve bulduklarını bir nesnede topluyor.
                </Text>

                <Heading variant="heading-strong-m">3. Local Storage ile 30 Gün Boyunca Sakla</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                    İlk ziyaret sırasında, bu parametreler localStorage’da 30 gün boyunca saklanır. 30 gün sonra ise otomatik olarak temizlenir.
                </Text>
                <CodeBlock
                    lineNumbers
                    compact
                    codes={[
                        {
                            language: "javascript",
                            label: "expiry_config.js",
                            code: `const EXPIRY_DAYS = 30; // Saklama süresini gün cinsinden buraya giriyorsunuz.
const LS_EXPIRY_MS = EXPIRY_DAYS * 24 * 60 * 60 * 1000;
// Totalde salise cinsinden hesaplanır. 2. satırda bir işlem yapmayın.`
                        }
                    ]}
                />

                <Heading variant="heading-strong-m">4. Session Storage ile Oturum Boyunca Sakla</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                    Ayrıca, parametreler sessionStorage’a da yazılır. Bu sayede kullanıcı sekmeyi kapatana kadar parametreler kolayca erişilebilir olur.
                </Text>

                <Heading variant="heading-strong-m">5. JavaScript ile Kolayca Erişim</Heading>
                <CodeBlock
                    lineNumbers
                    compact
                    codes={[
                        {
                            language: "javascript",
                            label: "access.js",
                            code: `console.log(window.trackingParams);`
                        }
                    ]}
                />
            </Column>

            <Column gap="12">
                <Heading variant="heading-strong-l">Bu Script’i Nerelerde Kullanabilirsiniz?</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                    • <strong>Formlarda ön doldurma:</strong> Kayıt veya iletişim formlarında, kullanıcıya ait kampanya bilgisini otomatik olarak doldurabilirsiniz.<br/>
                    • <strong>Analytics entegrasyonu:</strong> Google Analytics, Facebook Pixel gibi araçlara kendi izleme parametrelerinizi göndermek için kullanabilirsiniz.<br/>
                    • <strong>Kişiselleştirilmiş içerik:</strong> Kullanıcının geldiği trafik kaynağı veya kampanya parametrelerine göre web sitenizde kişiselleştirilmiş içerikler gösterebilirsiniz.
                </Text>
            </Column>

            <Column gap="12">
                <Heading variant="heading-strong-l">Tüm Kod (Body içerisine)</Heading>
                <CodeBlock
                    lineNumbers
                    codes={[
                        {
                            language: "html",
                            label: "trackUrlParams.html",
                            code: `<script>
(function trackUrlParams() {
    const TRACKED_PARAMS = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
        'gclid',
        'fbclid'
    ];
    const searchParams = new URLSearchParams(window.location.search);
    let foundParams = {};
    for (const key of TRACKED_PARAMS) {
        if (searchParams.has(key)) {
            foundParams[key] = searchParams.get(key);
        }
    }
    const LS_KEY = 'trackingParams';
    const LS_EXP_KEY = 'trackingParams_expiry';
    const now = Date.now();
    const EXPIRY_DAYS = 30; // Saklama süresi (gün)
    const LS_EXPIRY_MS = EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    if (Object.keys(foundParams).length > 0) {
        if (!localStorage.getItem(LS_KEY) || Number(localStorage.getItem(LS_EXP_KEY)) < now) {
            localStorage.setItem(LS_KEY, JSON.stringify(foundParams));
            localStorage.setItem(LS_EXP_KEY, now + LS_EXPIRY_MS);
        }
    } else {
        const exp = Number(localStorage.getItem(LS_EXP_KEY));
        if (exp && exp < now) {
            localStorage.removeItem(LS_KEY);
            localStorage.removeItem(LS_EXP_KEY);
        }
    }
    if (Object.keys(foundParams).length > 0) {
        sessionStorage.setItem(LS_KEY, JSON.stringify(foundParams));
    } else {
        sessionStorage.removeItem(LS_KEY);
    }
    window.trackingParams = foundParams;
})();
</script>`
                        }
                    ]}
                />
            </Column>

            <Column gap="12">
                <Heading variant="heading-strong-l">GTM Custom HTML</Heading>
                <CodeBlock
                    lineNumbers
                    codes={[
                        {
                            language: "html",
                            label: "gtm_tag.html",
                            code: `<script>
(function trackUrlParams() {
    var TRACKED_PARAMS = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
        'gclid',
        'fbclid'
    ];
    function getQueryParams() {
        var params = {};
        var query = window.location.search.substring(1);
        var pairs = query.split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            if (pair[0]) {
                params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
            }
        }
        return params;
    }
    var searchParams = getQueryParams();
    var foundParams = {};
    for (var i = 0; i < TRACKED_PARAMS.length; i++) {
        var key = TRACKED_PARAMS[i];
        if (searchParams.hasOwnProperty(key)) {
            foundParams[key] = searchParams[key];
        }
    }
    var LS_KEY = 'trackingParams';
    var LS_EXP_KEY = 'trackingParams_expiry';
    var now = (new Date()).getTime();
    var EXPIRY_DAYS = 30; // Saklama süresi (gün)
    var LS_EXPIRY_MS = EXPIRY_DAYS * 24 * 60 * 60 * 1000;
    if (Object.keys(foundParams).length > 0) {
        if (!localStorage.getItem(LS_KEY) || Number(localStorage.getItem(LS_EXP_KEY)) < now) {
            localStorage.setItem(LS_KEY, JSON.stringify(foundParams));
            localStorage.setItem(LS_EXP_KEY, now + LS_EXPIRY_MS);
        }
    } else {
        var exp = Number(localStorage.getItem(LS_EXP_KEY));
        if (exp && exp < now) {
            localStorage.removeItem(LS_KEY);
            localStorage.removeItem(LS_EXP_KEY);
        }
    }
    if (Object.keys(foundParams).length > 0) {
        sessionStorage.setItem(LS_KEY, JSON.stringify(foundParams));
    } else {
        sessionStorage.removeItem(LS_KEY);
    }
    window.trackingParams = foundParams;
})();
</script>`
                        }
                    ]}
                />
            </Column>

            <Text variant="body-default-m" onBackground="neutral-weak" marginTop="32">
                Bir sonraki makalede görüşmek üzere.
            </Text>
        </Column>
      </Column>
    </Column>
  );
}