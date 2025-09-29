import React from 'react';
import { cn } from '@/lib/utils';
import { Shield, Users, Rocket, CheckIcon, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PricingTableDemo() {
    return (
        <section id="pricing" className="py-20 px-4 bg-black relative overflow-hidden" style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
        }}>
            {/* Modern background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />

            <div className="mx-auto max-w-6xl relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/80 backdrop-blur-sm border border-violet-500/30 shadow-sm mb-6">
                        <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-pulse" />
                        <span className="text-sm text-violet-300 font-semibold">خطط الأسعار</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                        اختر الخطة{' '}
                        <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                            المثالية
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        حلول متكاملة وعصرية لتأسيس شركتك الناشئة والحصول على رخصة ريادة الأعمال
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20">
                    {pricingPlans.map((plan, index) => (
                        <PricingCard key={plan.name} plan={plan} index={index} />
                    ))}
                </div>

                {/* Features Comparison */}
                <FeaturesComparison />
            </div>
        </section>
    );
}

// Pricing data
const pricingPlans = [
    {
        name: "الباقة الأساسية",
        subtitle: "للأفراد والمشاريع الصغيرة",
        price: "999",
        originalPrice: "1,299",
        currency: "ر.س",
        icon: Shield,
        popular: false,
        features: [
            "استشارة مجانية",
            "إعداد الوثائق القانونية",
            "تقديم طلب الرخصة",
            "متابعة أساسية للطلب",
            "استشارة قانونية واحدة",
            "دعم عبر الإيميل",
            "مراجعة أساسية للوثائق",
            "التسليم خلال 15 يوم عمل",
            "ضمان 30 يوم"
        ]
    },
    {
        name: "الباقة المتقدمة",
        subtitle: "للشركات الناشئة",
        price: "1,499",
        originalPrice: "1,899",
        currency: "ر.س",
        icon: Users,
        popular: true,
        features: [
            "كل ما في الباقة الأساسية",
            "متابعة متقدمة للطلب",
            "3 استشارات قانونية",
            "دعم عبر الهاتف والإيميل",
            "مراجعة شاملة للوثائق",
            "التسليم خلال 10 أيام عمل",
            "ضمان 60 يوم",
            "تحديثات قانونية",
            "تقرير شهري",
            "خصم 10% على الخدمات الإضافية"
        ]
    },
    {
        name: "الباقة الشاملة",
        subtitle: "للشركات الكبيرة",
        price: "2,299",
        originalPrice: "2,899",
        currency: "ر.س",
        icon: Rocket,
        popular: false,
        features: [
            "كل ما في الباقة المتقدمة",
            "متابعة شاملة للطلب",
            "استشارات قانونية غير محدودة",
            "دعم مخصص 24/7",
            "مراجعة مفصلة وتحسينات",
            "التسليم خلال 7 أيام عمل",
            "ضمان 90 يوم",
            "تقارير أسبوعية",
            "خصم 20% وخدمات مجانية",
            "مدير حساب مخصص"
        ]
    }
];

function PricingCard({ plan, index }: { plan: typeof pricingPlans[0], index: number }) {
    const Icon = plan.icon;

    return (
        <div className={cn(
            "relative h-full group transition-all duration-300 hover:-translate-y-2",
            plan.popular ? "scale-105" : ""
        )}>
            {/* Glow effect for popular */}
            {plan.popular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
            )}

            {/* Card */}
            <div className={cn(
                "relative h-full p-4 md:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300",
                plan.popular
                    ? "bg-gray-900/90 border-violet-500/30 shadow-xl shadow-violet-500/20 group-hover:shadow-2xl group-hover:shadow-violet-500/30"
                    : "bg-gray-800/80 border-gray-600/40 shadow-lg hover:shadow-xl hover:border-gray-500/60 group-hover:bg-gray-800/95"
            )}>
                {/* Popular badge */}
                {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            <Star className="w-3 h-3 inline mr-1 fill-current" />
                            الأكثر شعبية
                        </div>
                    </div>
                )}

                {/* Icon with modern styling */}
                <div className={cn(
                    "w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 relative overflow-hidden",
                    plan.popular
                        ? "bg-gradient-to-br from-violet-900/80 to-purple-900/80 text-violet-300"
                        : "bg-gradient-to-br from-gray-700/80 to-gray-600/80 text-gray-300"
                )}>
                    <Icon className="w-4 h-4 md:w-6 md:h-6 relative z-10" />
                    <div className={cn(
                        "absolute inset-0 opacity-20",
                        plan.popular
                            ? "bg-gradient-to-br from-violet-600 to-purple-600"
                            : "bg-gradient-to-br from-gray-500 to-gray-400"
                    )} />
                </div>

                {/* Header with better typography */}
                <div className="mb-4 md:mb-8">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{plan.name}</h3>
                    <p className="text-sm md:text-base text-gray-300 font-medium">{plan.subtitle}</p>
                </div>

                {/* Price with modern styling */}
                <div className="mb-4 md:mb-8">
                    <div className="flex items-baseline gap-1 md:gap-2 mb-2 md:mb-3">
                        <span className="text-2xl md:text-4xl font-black text-white">{plan.price}</span>
                        <span className="text-sm md:text-lg font-semibold text-gray-300">{plan.currency}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500 line-through font-medium">{plan.originalPrice} {plan.currency}</span>
                        <span className="text-xs bg-gradient-to-r from-emerald-500 to-green-500 text-white px-2 md:px-3 py-1 rounded-full font-bold shadow-sm">
                            وفر {Math.round(((parseInt(plan.originalPrice) - parseInt(plan.price)) / parseInt(plan.originalPrice)) * 100)}%
                        </span>
                    </div>
                </div>

                {/* Features with modern checkmarks */}
                <div className="space-y-2 md:space-y-4 mb-4 md:mb-8">
                    {plan.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 md:gap-3">
                            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <CheckIcon className="w-2 h-2 md:w-3 md:h-3 text-white" />
                            </div>
                            <span className="text-xs md:text-sm text-gray-300 font-medium leading-relaxed">{feature}</span>
                        </div>
                    ))}
                    {plan.features.length > 4 && (
                        <div className="text-xs md:text-sm text-gray-400 mt-2 md:mt-3 font-medium">
                            + {plan.features.length - 4} ميزة إضافية
                        </div>
                    )}
                </div>

                {/* Modern button */}
                <Button
                    className={cn(
                        "w-full py-3 md:py-4 text-sm md:text-base font-bold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]",
                        plan.popular
                            ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl shadow-violet-200/50"
                            : "bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white shadow-lg hover:shadow-xl"
                    )}
                    size="lg"
                >
                    ابدأ الآن
                </Button>
            </div>
        </div>
    );
}

function FeaturesComparison() {
    const features = [
        { name: "استشارة مجانية", basic: true, advanced: true, premium: true },
        { name: "إعداد الوثائق القانونية", basic: true, advanced: true, premium: true },
        { name: "تقديم طلب الرخصة", basic: true, advanced: true, premium: true },
        { name: "متابعة الطلب", basic: "أساسية", advanced: "متقدمة", premium: "شاملة" },
        { name: "الاستشارات القانونية", basic: "1 استشارة", advanced: "3 استشارات", premium: "غير محدودة" },
        { name: "الدعم الفني", basic: "إيميل", advanced: "هاتف + إيميل", premium: "24/7 مخصص" },
        { name: "مراجعة الوثائق", basic: "أساسية", advanced: "شاملة", premium: "مفصلة" },
        { name: "مدة التسليم", basic: "15 يوم عمل", advanced: "10 أيام عمل", premium: "7 أيام عمل" },
        { name: "ضمان الخدمة", basic: "30 يوم", advanced: "60 يوم", premium: "90 يوم" },
        { name: "التحديثات القانونية", basic: false, advanced: true, premium: true },
        { name: "التقارير الدورية", basic: false, advanced: "شهرية", premium: "أسبوعية" },
        { name: "الخدمات الإضافية", basic: false, advanced: "خصم 10%", premium: "خصم 20%" }
    ];

    return (
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-600/40 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="p-4 md:p-6 bg-gradient-to-r from-gray-800/80 to-violet-900/30 border-b border-gray-600/50">
                <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-1 md:mb-2">مقارنة تفصيلية للميزات</h3>
                <p className="text-sm md:text-base text-gray-300 text-center font-medium">اطلع على جميع التفاصيل لكل باقة</p>
            </div>

            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                <table className="w-full min-w-[500px]">
                    <thead>
                        <tr className="border-b border-gray-600/60 bg-gradient-to-r from-gray-800/80 to-gray-700/80">
                            <th className="text-right p-2 md:p-4 text-gray-200 font-bold text-xs md:text-sm min-w-[120px]">الميزة</th>
                            <th className="text-center p-2 md:p-4 text-gray-200 font-bold text-xs md:text-sm min-w-[100px]">الأساسية</th>
                            <th className="text-center p-2 md:p-4 text-violet-300 font-bold text-xs md:text-sm bg-violet-900/30 min-w-[100px]">المتقدمة</th>
                            <th className="text-center p-2 md:p-4 text-gray-200 font-bold text-xs md:text-sm min-w-[100px]">الشاملة</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr key={index} className="border-b border-gray-700/60 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-violet-900/20 transition-colors duration-200">
                                <td className="p-2 md:p-4 text-gray-200 text-xs md:text-sm font-semibold">{feature.name}</td>
                                <td className="p-2 md:p-4 text-center">
                                    {typeof feature.basic === 'boolean'
                                        ? feature.basic
                                            ? <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center mx-auto">
                                                <CheckIcon className="w-2 h-2 md:w-4 md:h-4 text-white" />
                                              </div>
                                            : <span className="text-gray-500 text-sm md:text-lg">−</span>
                                        : <span className="text-gray-300 text-xs md:text-sm font-medium px-1 md:px-2 py-1 bg-gray-700 rounded-full">{feature.basic}</span>
                                    }
                                </td>
                                <td className="p-2 md:p-4 text-center bg-violet-900/30">
                                    {typeof feature.advanced === 'boolean'
                                        ? feature.advanced
                                            ? <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center mx-auto">
                                                <CheckIcon className="w-2 h-2 md:w-4 md:h-4 text-white" />
                                              </div>
                                            : <span className="text-gray-500 text-sm md:text-lg">−</span>
                                        : <span className="text-violet-300 text-xs md:text-sm font-bold px-1 md:px-3 py-1 bg-violet-800 rounded-full">{feature.advanced}</span>
                                    }
                                </td>
                                <td className="p-2 md:p-4 text-center">
                                    {typeof feature.premium === 'boolean'
                                        ? feature.premium
                                            ? <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center mx-auto">
                                                <CheckIcon className="w-2 h-2 md:w-4 md:h-4 text-white" />
                                              </div>
                                            : <span className="text-gray-500 text-sm md:text-lg">−</span>
                                        : <span className="text-gray-300 text-xs md:text-sm font-medium px-1 md:px-2 py-1 bg-gray-700 rounded-full">{feature.premium}</span>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

